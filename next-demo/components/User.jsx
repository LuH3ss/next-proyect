'use client'

function User({user}) {
    
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-15em" src={user.avatar} alt="user profile image"/>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{user.first_name} {user.last_name}</div>
      <p class="text-gray-700 text-base">
      {user.email}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
    </div>
  </div>
    
  )
}

export default User