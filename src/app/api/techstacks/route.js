import { readDatabase, writeDatabase } from '../db-utils';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = readDatabase();
    return NextResponse.json(db.techstacks || {});
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch techstacks' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { category, tech } = body;
    const db = readDatabase();
    
    if (!db.techstacks[category]) {
      db.techstacks[category] = [];
    }
    
    const newTech = {
      id: db.techstacks[category].length > 0 
        ? Math.max(...db.techstacks[category].map(t => t.id)) + 1 
        : 1,
      ...tech,
    };
    
    db.techstacks[category].push(newTech);
    writeDatabase(db);
    
    return NextResponse.json(newTech, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create tech' }, { status: 500 });
  }
}

