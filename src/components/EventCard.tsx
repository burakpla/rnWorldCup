import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface EventCardProps {
  item: any;
  onPress: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      {/* Maç Görseli (Thumbnail) */}
      <Image source={{ uri: item.strThumb }} style={styles.thumbnail} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.leagueText}>{item.strLeague} - Sezon {item.strSeason}</Text>
        <Text style={styles.eventTitle}>{item.strEvent}</Text>
        
        {/* Skor Alanı */}
        <View style={styles.scoreRow}>
          <Image source={{ uri: item.strHomeTeamBadge }} style={styles.badge} />
          <Text style={styles.scoreText}>
            {item.intHomeScore} - {item.intAwayScore}
          </Text>
          <Image source={{ uri: item.strAwayTeamBadge }} style={styles.badge} />
        </View>

        <Text style={styles.venueText}>📍 {item.strVenue}, {item.strCountry}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android gölge
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
  },
  leagueText: {
    fontSize: 12,
    color: '#888',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 4,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 8,
  },
  badge: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#111',
  },
  venueText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});