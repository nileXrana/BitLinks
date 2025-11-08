import clientPromise from "@/lib/mongodb";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
            const body = await req.json();
            console.log('[/api/generate] received body:', { shorturl: body.shorturl, url: body.url ? '<redacted>' : body.url });
        
        // Server-side validation
        if (!body.url || !body.url.trim()) {
            return NextResponse.json({ success: false, error: true, message: 'URL is required' }, { status: 400 });
        }
        if (!body.shorturl || !body.shorturl.trim()) {
            return NextResponse.json({ success: false, error: true, message: 'Short URL is required' }, { status: 400 });
        }
        if (body.shorturl.length < 3) {
            return NextResponse.json({ success: false, error: true, message: 'Short URL must be at least 3 characters' }, { status: 400 });
        }
        if (!/^[a-zA-Z0-9-_]+$/.test(body.shorturl)) {
            return NextResponse.json({ success: false, error: true, message: 'Short URL can only contain letters, numbers, hyphens, and underscores' }, { status: 400 });
        }
        
        // Validate URL format
        try {
            const urlObj = new URL(body.url);
            if (urlObj.protocol !== "http:" && urlObj.protocol !== "https:") {
                return NextResponse.json({ success: false, error: true, message: 'URL must use HTTP or HTTPS protocol' }, { status: 400 });
            }
        } catch (e) {
            return NextResponse.json({ success: false, error: true, message: 'Invalid URL format' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("bitlinks");
        const collection = db.collection("url");

        // check if the short url already exist :
            const doc = await collection.findOne({ shorturl: body.shorturl });
            console.log('[/api/generate] findOne result:', !!doc);
        if (doc) {
            return NextResponse.json({ success: false, error: true, message: 'URL already exists!' }, { status: 409 });
        }

            const insertResult = await collection.insertOne({
                url: body.url,
                shorturl: body.shorturl,
            });
            console.log('[/api/generate] insertResult:', insertResult.insertedId);

        return NextResponse.json({ success: true, error: false, message: 'URL generated successfully' }, { status: 201 });
    } catch (err) {
        console.error('[/api/generate] error:', err);
        return NextResponse.json({ success: false, error: true, message: 'Internal Server Error' }, { status: 500 });
    }
}
