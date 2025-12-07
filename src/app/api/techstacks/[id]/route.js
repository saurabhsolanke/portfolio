import { readDatabase, writeDatabase } from '../../db-utils';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const { category, tech } = body;
    const db = readDatabase();
    
    if (!db.techstacks[category]) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    
    const index = db.techstacks[category].findIndex(t => t.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Tech not found' }, { status: 404 });
    }
    
    db.techstacks[category][index] = { ...db.techstacks[category][index], ...tech, id };
    writeDatabase(db);
    
    return NextResponse.json(db.techstacks[category][index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update tech' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const { category } = await request.json();
    const db = readDatabase();
    
    if (!db.techstacks[category]) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }
    
    const index = db.techstacks[category].findIndex(t => t.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Tech not found' }, { status: 404 });
    }
    
    db.techstacks[category].splice(index, 1);
    writeDatabase(db);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete tech' }, { status: 500 });
  }
}

