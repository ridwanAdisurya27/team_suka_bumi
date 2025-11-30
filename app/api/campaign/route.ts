import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const textFields: Record<string, string> = {};
    const fileFields: Record<string, File> = {};

    console.log("=== RAW FORM DATA ===");

    for (const [key, value] of formData.entries()) {
      console.log("FIELD:", key, "VALUE:", value);

      if (typeof value === "string") {
        textFields[key] = value;
      } else if (value instanceof Blob) {
        fileFields[key] = value as File;
        console.log(`➡ FILE FIELD DETECTED: ${key}, size=${value.size}`);
      }
    }

    console.log("TEXT FIELDS:", textFields);
    console.log("FILE FIELDS:", Object.keys(fileFields));

    // Upload semua file sequential
    const uploadedFiles: Record<string, string> = {};

    for (const [fieldName, file] of Object.entries(fileFields)) {
      try {
        const fd = new FormData();
        fd.append("file", file); // HARUS pakai key "file"

        console.log(`Uploading file: ${fieldName}`);

        const res = await fetch(`${getBaseUrl()}/api/upload`, {
          method: "POST",
          body: fd,
        });

        if (!res.ok) {
          console.error(`UPLOAD FAILED (${fieldName})`, await res.text());
          uploadedFiles[fieldName] = "";
          continue;
        }

        const json = await res.json();

        if (json?.success && json?.result?.file) {
          uploadedFiles[fieldName] = json.result.file;
        } else {
          uploadedFiles[fieldName] = "";
        }

        console.log(`✔ UPLOADED: ${fieldName} => ${uploadedFiles[fieldName]}`);
      } catch (uploadErr) {
        console.error(`UPLOAD ERROR (${fieldName})`, uploadErr);
        uploadedFiles[fieldName] = "";
      }
    }

    const mergedResult = {
      ...textFields,
      ...uploadedFiles,
    };

    console.log("=== FINAL MERGED RESULT ===", mergedResult);

    return NextResponse.json({
      success: true,
      message: "Upgrade data processed successfully",
      receivedData: mergedResult,
      uploadedFiles,
      totalUploaded: Object.keys(uploadedFiles).length,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error("UPGRADE API ERROR:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

function getBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:4000";
  }
  return (
    process.env.NEXT_PUBLIC_BASE_URL || "https://your-production-domain.com"
  );
}
