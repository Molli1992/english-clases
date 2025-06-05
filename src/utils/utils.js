"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const routeGoHome = () => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return { goHome };
};

export const routeGoAboutUs = () => {
  const router = useRouter();

  const goAboutUs = () => {
    router.push("/aboutUs");
  };

  return { goAboutUs };
};

export const routeGoServices = () => {
  const router = useRouter();

  const goServices = () => {
    router.push("/services");
  };

  return { goServices };
};

export const routeGoContact = () => {
  const router = useRouter();

  const goContact = () => {
    router.push("/contact");
  };

  return { goContact };
};

export const validEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    return false;
  }

  return true;
};

export const handleOpenLink = (url) => {
  window.open(url, "_blank");
};
