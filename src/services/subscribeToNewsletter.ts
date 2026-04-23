import axios from 'axios';

export async function subscribeToNewsletter(email: string): Promise<boolean> {
  try {
    await axios.post('/email', { email }, { timeout: 7000 });
    return true;
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return false;
  }
}
