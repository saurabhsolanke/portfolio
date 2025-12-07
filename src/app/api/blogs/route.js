import { readDatabase, writeDatabase } from '../db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = readDatabase();
    return NextResponse.json(db.blogs || []);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const db = readDatabase();
    
    const newBlog = {
      id: db.blogs.length > 0 ? Math.max(...db.blogs.map(b => b.id)) + 1 : 1,
      ...body,
    };
    
    db.blogs.push(newBlog);
    writeDatabase(db);
    
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
  }
}

