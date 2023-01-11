import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const getRandomHexColor = () =>
  '#' + Math.floor(Math.random() * 16777216).toString(16);

const Statistic = ({ title, stats }) => {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>

        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              className={css.item}
              key={stat.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistic;
