import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
  const store = await cookies();
  const locale = store.get('locale')?.value || 'en';

  redirect(`/${locale}`);
}
