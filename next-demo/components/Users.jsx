'use client'

import Link from "next/link"

function Users({users}) {
  return (
    <ul role="list" class="divide-y divide-gray-100 mx-auto">
    {
      users.map((user) => (
        
        <Link  key={user.id} href={`/users/${user.id}`}>
        <li class="flex justify-between gap-x-6 ">
        <div class="flex  gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full" src={user.avatar} alt="user img profile"/>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6">{user.first_name} {user.last_name} </p>
            <p class="mt-1 truncate text-xs leading-5">{user.email}</p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6">ID: {user.id}</p>
          <p class="mt-1 text-xs leading-5">Last seen <time datetime="2023-01-23T13:23Z">3h ago</time></p>
        </div>
      </li>
        </Link>
      ))
    }
   </ul>
  )
}

export default Users