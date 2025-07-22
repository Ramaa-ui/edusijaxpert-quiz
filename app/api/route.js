export async function POST(request) {
  const body = await request.json();
  const { jawaban } = body;

  const jawabanBenar = "A";

  return new Response(JSON.stringify({
    benar: jawaban === jawabanBenar
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
