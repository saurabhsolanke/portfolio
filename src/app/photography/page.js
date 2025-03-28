'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import MacWindow from '../components/MacWindow';

export default function Photography() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos from your API
    fetch("https://picsum.photos/200/300",{
      method: 'GET',
      headers: {
        'Authorization': `Bearer`
      }
    })
      .then(res => res.json())
      .then(data => setPhotos(data));
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <MacWindow title="Photography.app">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={photo.src.large}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </MacWindow>
    </div>
  );
} 