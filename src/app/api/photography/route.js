import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    // You'll need to use the Pexels API
    const response = await axios.get(`https://api.pexels.com/v1/users/@saurabh-solanke-436846`, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch photos' }, { status: 500 });
  }
} 