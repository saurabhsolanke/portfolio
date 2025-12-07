import { readDatabase, writeDatabase } from '../../db-utils';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const db = readDatabase();
    
    const index = db.blogs.findIndex(b => b.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    db.blogs[index] = { ...db.blogs[index], ...body, id };
    writeDatabase(db);
    
    return NextResponse.json(db.blogs[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const db = readDatabase();
    
    const index = db.blogs.findIndex(b => b.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    
    db.blogs.splice(index, 1);
    writeDatabase(db);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
  }
}

