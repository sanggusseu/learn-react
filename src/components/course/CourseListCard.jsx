import { Fragment } from 'react';
import Card from '../Card';
import CourseItem from './CourseItem';

export default function CourseListCard({ title, items, onHandleFavorite }) {
  const lastIndex = items.length - 1;

  return (
    <Card title={title}>
      <div className='courses'>
        {items.map((item, i) => (
          <Fragment key={i + item.title}>
            <CourseItem
              {...item}
              index={i}
              onHandleFavorite={onHandleFavorite}
            />
            {i !== lastIndex && <hr className='divider' />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
