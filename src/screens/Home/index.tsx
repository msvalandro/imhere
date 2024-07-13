import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const participants = [
    'Ava Weston',
    'Liam Hartley',
    'Mia Grayson',
    'Ethan Whitaker',
    'Sophia Chandler',
    'Noah Sterling',
    'Isabella Manning',
    'Lucas Tennyson',
    'Harper Ellington',
    'Mason Driscoll',
  ]

  function handleAddParticipant() {
    console.log('adding participant...')
  }

  function handleRemoveParticipant(name: string) {
    console.log('removing participant...', name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant name={item} onRemove={handleRemoveParticipant} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
