import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/firebase"; // Import dari firebase client
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const textFields: Record<string, string> = {};

    // Extract text fields
    const textFieldNames = [
      "fullName",
      "phoneNumber",
      "foundationName",
      "foundationPhone",
      "foundationAddress",
      "npwp",
      "socialMedia",
    ];

    // Collect all text inputs
    for (const fieldName of textFieldNames) {
      const value = formData.get(fieldName);
      textFields[fieldName] = typeof value === "string" ? value : "";
    }

    // Get email for query (from hidden input)
    const myemail = formData.get("myemail");
    const userEmail = typeof myemail === "string" ? myemail : "";

    // Update user data in Firebase if email exists
    if (userEmail) {
      try {
        // Query user by email
        const usersRef = collection(db, "usersv2");
        const q = query(usersRef, where("email", "==", userEmail));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          // Get first matching document (assuming email is unique)
          const userDoc = snapshot.docs[0];

          // Update the document
          await updateDoc(userDoc.ref, {
            isYayasan: "true",
            name: textFields.fullName || "",
            role: "yayasan",
            yayasanLoc: textFields.foundationAddress || "",
            yayasanName: textFields.foundationName || "",
            yayasanTel: textFields.foundationPhone || "",
            yayasanNPWP: textFields.npwp || "",
            yayasanSoc: textFields.socialMedia || "",
            updatedAt: new Date().toISOString(),
          });

          console.log(`✅ Updated user: ${userEmail} to yayasan role`);
        } else {
          console.log(`❌ User with email ${userEmail} not found`);
        }
      } catch (firebaseError: any) {
        console.error("Firebase update error:", firebaseError);
        // Continue with response even if Firebase update fails
      }
    } else {
      console.log("❌ No email provided for update");
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Upgrade data processed successfully",
      receivedData: textFields,
      userUpdated: !!userEmail,
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
