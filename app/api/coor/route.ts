// app/api/get-coordinates/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { link } = await request.json();

    if (!link) {
      return NextResponse.json({ error: "Link is required" }, { status: 400 });
    }

    console.log("Processing link:", link);

    // Fetch the shortened Google Maps link
    const response = await fetch(link, {
      redirect: "manual", // Important: don't follow redirects automatically
    });

    // Check for redirect status codes (3xx)
    if (response.status >= 300 && response.status < 400) {
      const location = response.headers.get("location");

      if (!location) {
        return NextResponse.json(
          { error: "No redirect location found" },
          { status: 400 }
        );
      }

      // Parse the coordinates from the redirected URL
      const urlParts = location.split("/");
      const placePart = urlParts.find((part) => part.includes("@"));

      if (!placePart) {
        return NextResponse.json(
          { error: "Could not parse coordinates from URL" },
          { status: 400 }
        );
      }

      // Extract coordinates from format like: Galaxy+Mall+3/@-7.2761703,112.7596217,5633m
      const coordinatesMatch = placePart.match(
        /@([-+]?\d+\.\d+),([-+]?\d+\.\d+)/
      );

      if (!coordinatesMatch) {
        return NextResponse.json(
          { error: "Could not extract coordinates" },
          { status: 400 }
        );
      }

      const latitude = coordinatesMatch[1];
      const longitude = coordinatesMatch[2];
      const coordinates = `${latitude},${longitude}`;

      return NextResponse.json({
        success: true,
        coordinates,
        latitude,
        longitude,
        redirectUrl: location,
      });
    } else {
      return NextResponse.json(
        { error: "No redirect found or invalid link" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing coordinates:", error);
    return NextResponse.json(
      { error: "Failed to process coordinates" },
      { status: 500 }
    );
  }
}
