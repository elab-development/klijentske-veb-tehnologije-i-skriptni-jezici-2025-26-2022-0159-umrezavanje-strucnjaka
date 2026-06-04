export async function fetchRecommendedUsers() {
  const response = await fetch("https://randomuser.me/api/?results=3");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await response.json();

  return data.results.map((user: any, index: number) => ({
    id: index + 1,
    fullName: `${user.name.first} ${user.name.last}`,
    title: "Professional Expert",
    location: `${user.location.city}, ${user.location.country}`,
    avatar: `${user.name.first[0]}${user.name.last[0]}`,
  }));
}