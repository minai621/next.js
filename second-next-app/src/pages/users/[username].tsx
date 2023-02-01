import React from 'react';
import { User } from 'src/type/types';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function UserData({ user }: { user: User }) {
  return (
    <div style={{ display: 'flex' }}>
      <Image
        src={user.profile_picture}
        alt={user.username}
        width={150}
        height={150}
      />
      <div>
        <div>
          <b>Username:</b> {user.username}
        </div>
        <div>
          <b>Full name:</b> {user.first_name} {user.last_name}
        </div>
        <div>
          <b>Email:</b> {user.email}
        </div>
        <div>
          <b>Company:</b> {user.company}
        </div>
        <div>
          <b>Job title:</b> {user.job_title}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { username: string };
}) {
  const { username } = query;

  return {
    props: {
      username,
    },
  };
}

function UserPage({ username }: { username: string }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const req = await fetch(`/api/04/users/username=${username}`);
      const data = await req.json();

      setLoading(false);
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Link href='/' passHref>
          Back to home
        </Link>
      </div>
      <hr />
      {loading && <div>Loading user data...</div>}
      {data && <UserData user={data} />}
    </div>
  );
}

export default UserPage;
