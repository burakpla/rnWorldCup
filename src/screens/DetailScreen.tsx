import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

export const DetailScreen: React.FC<Props> = ({ route }) => {
  // Gelen veriyi route params üzerinden alıyoruz
  const { eventData } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Büyük Poster */}
        <Image source={{ uri: eventData.strPoster || eventData.strThumb }} style={styles.poster} />

        <View style={styles.contentContainer}>
          <Text style={styles.statusBadge}>Durum: {eventData.strStatus}</Text>
          
          <Text style={styles.mainTitle}>{eventData.strEvent}</Text>
          <Text style={styles.subTitle}>{eventData.strLeague} ({eventData.strSeason} Sezonu)</Text>
          
          <View style={styles.divider} />

          {/* Takım Detayları Layout */}
          <View style={styles.teamsRow}>
            <View style={styles.teamContainer}>
              <Image source={{ uri: eventData.strHomeTeamBadge }} style={styles.largeBadge} />
              <Text style={styles.teamName}>{eventData.strHomeTeam}</Text>
              <Text style={styles.score}>{eventData.intHomeScore}</Text>
            </View>

            <Text style={styles.vsText}>VS</Text>

            <View style={styles.teamContainer}>
              <Image source={{ uri: eventData.strAwayTeamBadge }} style={styles.largeBadge} />
              <Text style={styles.teamName}>{eventData.strAwayTeam}</Text>
              <Text style={styles.score}>{eventData.intAwayScore}</Text>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Ek Bilgiler */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Tarih:</Text>
            <Text style={styles.infoValue}>{eventData.dateEvent} - {eventData.strTime}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Stadyum:</Text>
            <Text style={styles.infoValue}>{eventData.strVenue}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Ülke:</Text>
            <Text style={styles.infoValue}>{eventData.strCountry}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  statusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#28a745',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222',
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  teamsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
  },
  largeBadge: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  teamName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 8,
    height: 40,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007AFF',
    marginTop: 5,
  },
  vsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999',
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoLabel: {
    width: 90,
    fontWeight: 'bold',
    color: '#555',
  },
  infoValue: {
    flex: 1,
    color: '#333',
  },
});