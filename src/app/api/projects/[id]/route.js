import { readDatabase, writeDatabase } from '../../db-utils';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    const db = readDatabase();
    
    const index = db.projects.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    db.projects[index] = { ...db.projects[index], ...body, id };
    writeDatabase(db);
    
    return NextResponse.json(db.projects[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const db = readDatabase();
    
    const index = db.projects.findIndex(p => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    db.projects.splice(index, 1);
    writeDatabase(db);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}

