import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }: { hasBorder: Boolean, src: String }) {
  return (
    <img
      src={src}
      alt=""
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
