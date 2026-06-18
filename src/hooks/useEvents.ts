import { useState, useEffect } from 'react';

export const useEvents = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        'https://www.thesportsdb.com/api/v1/json/3/eventsseason.php?id=4429&s=2026'
      );
      const data = await response.json();
      setEvents(data.events || []);
    } catch (error) {
      console.error('Veri çekilirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  };

  return { events, loading };
};
