import portraitAsset from "@/assets/joseph-portrait.png.asset.json";

export function ProfilePortrait() {
  return (
    <figure className="about-profile-portrait">
      <img
        src={portraitAsset.url}
        alt="Portrait of Joseph Ogakwu"
        width={1086}
        height={1448}
        decoding="async"
      />
      <figcaption>
        <span>J. Ogakwu</span>
        <span>ID / 01</span>
      </figcaption>
    </figure>
  );
}
