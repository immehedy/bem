import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authAccessToken } from "../utils/authAccessToken";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();
    const token = authAccessToken();
    useEffect(() => {
      if (!token) {
        router.push("/signin");
      }
    }, [token, router]);

    return <Component {...props} />;
  };
}

