
<h1>Sign Up</h1>

<form class="flex flex-col gap-4" method="POST" action="/login">
  <label class="block w-full">
    <div class="text-slate-600">Email</div>
    <input class="border border-blue-200 rounded py-2 px-2 w-full" name="email" type="email">
  </label>
  <label class="block w-full">
    <div class="text-slate-600">Password</div>
    <input class="border border-blue-200 rounded py-2 px-2 w-full" name="password" type="password">
  </label>
  <button class="mt-4 px-3 py-2 bg-blue-500 hover:bg-blue-400 text-white">Sign Up</button>
</form>
<a href="/signup" class="block mt-4 text-gray-500 underline hover:text-blue-500">You have already signed up? Login here!</a>