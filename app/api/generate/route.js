import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // check if the short url already exist :
        const doc = await collection.findOne({ shorturl: body.shorturl });
        if (doc) {
            return NextResponse.json({ success: false, error: true, message: 'URL already exists!' }, { status: 409 });
        }

        await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl,
        });

        return NextResponse.json({ success: true, error: false, message: 'URL generated successfully' }, { status: 201 });
    } catch (err) {
        console.error('[/api/generate] error:', err);
        return NextResponse.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 });
    }
}
