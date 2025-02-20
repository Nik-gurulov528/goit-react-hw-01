import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.personCard}>
      <div>
        <img
          className={css.personAvatar}
          src={image}
          alt="User avatar"
          width={128}
        />
        <p className={css.personName}>{name}</p>
        <div className={css.personAdditional}>
          <p className={css.personAdditionalInfo}>@{tag}</p>
          <p className={css.personAdditionalInfo}>{location}</p>
        </div>
      </div>

      <ul className={css.personStats}>
        <li className={css.personStatsItem}>
          <span>Followers</span>
          <span className={css.personStatsNum}>{stats.followers}</span>
        </li>
        <li className={css.personStatsItem}>
          <span>Views</span>
          <span className={css.personStatsNum}>{stats.views}</span>
        </li>
        <li className={css.personStatsItem}>
          <span>Likes</span>
          <span className={css.personStatsNum}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
