// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json();

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Insert into Supabase users table
        const { data, error } = await supabase
            .from("users")
            .insert([{ full_name: name, email, password }]);

        if (error) {
            console.error(error);
            return NextResponse.json({ message: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: "User created successfully", user: data });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Server error" }, { status: 500 });
    }
}
