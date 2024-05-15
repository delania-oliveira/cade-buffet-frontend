import { ref } from 'vue'

const baseUrl = 'http://localhost:3000/api/v1/buffets'

export default function useBuffetData() {
  const data = ref(null)
  const error = ref(null)

  const fetchBuffets = async () => {
    try {
      const response = await fetch(`${baseUrl}`)
      if (!response.ok) {
        throw new Error('Erro ao buscar buffets')
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { data, error, fetchBuffets}
}