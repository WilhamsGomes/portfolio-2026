import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import type { SocialLink } from "@/lib/contact";

export function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  return icon === "github" ? (
    <GitHubIcon className="text-lg" />
  ) : (
    <LinkedInIcon className="text-base" />
  );
}
