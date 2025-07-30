"use client";

import { useAuth } from "../context/AuthContext";

export default function HomePage() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <main className="p-8">
      {user ? <p>Welcome, {user.email}</p> : <p>You are not signed in.</p>}
    </main>
  );
}
