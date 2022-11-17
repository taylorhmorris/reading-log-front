export async function getStoredData() {
  const token = localStorage.getItem('id_token');
  const user_id = await localStorage.getItem('user_id');
  return { token, user_id };
}
