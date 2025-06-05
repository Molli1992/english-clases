import { NextRequest, NextResponse } from "next/server";

const sendEmail = async (req: NextRequest, res: NextResponse) => {
  try {
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: error || "Error sending email", error },
      { status: 500 }
    );
  }
};

export { sendEmail as POST };
