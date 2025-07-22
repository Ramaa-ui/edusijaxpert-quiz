// app/api/cekjawaban/route.js

export async function GET(request) {
  const angka = request.nextUrl.searchParams.get("angka");
  const benar = request.nextUrl.searchParams.get("benar");

  if (!angka || !benar) {
    return new Response("Parameter tidak lengkap!", { status: 400 });
  }

  if (angka === benar) {
    return new Response("Benar!");
  } else {
    return new Response("Salah!");
  }
}
