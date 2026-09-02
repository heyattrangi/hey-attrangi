import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim().toLowerCase() || "";
    const sort = searchParams.get("sort") || "newest";

    let whereClause: any = {};

    if (search) {
      whereClause = {
        OR: [
          { firstName: { contains: search, mode: "insensitive" } },
          { lastName: { contains: search, mode: "insensitive" } },
          { email: { contains: search, mode: "insensitive" } },
          { organization: { contains: search, mode: "insensitive" } },
          { role: { contains: search, mode: "insensitive" } },
          { phoneNumber: { contains: search, mode: "insensitive" } },
        ],
      };
    }

    const orderByClause = {
      createdAt: sort === "oldest" ? ("asc" as const) : ("desc" as const),
    };

    const submissions = await prisma.contactSubmission.findMany({
      where: whereClause,
      orderBy: orderByClause,
    });

    return NextResponse.json({
      success: true,
      data: submissions,
      count: submissions.length,
    });
  } catch (error: any) {
    console.error("Error fetching contact submissions:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to retrieve contact submissions.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Submission ID is required." },
        { status: 400 }
      );
    }

    await prisma.contactSubmission.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: "Submission deleted successfully.",
    });
  } catch (error: any) {
    console.error("Error deleting contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to delete submission.",
      },
      { status: 500 }
    );
  }
}
