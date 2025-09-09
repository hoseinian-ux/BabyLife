export async function POST(req) {
  const { username, password } = await req.json();

  // اعتبارسنجی ساده
  if (username === "admin" && password === "1234") {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  return new Response(
    JSON.stringify({ error: "نام کاربری یا رمز اشتباه است ❌" }),
    { status: 401 }
  );
}
