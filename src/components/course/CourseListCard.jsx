import { Fragment } from 'react';
import Card from '../Card';
import CourseItem from './CourseItem';

export default function CourseListCard({ title, items }) {
  const lastIndex = items.length - 1;

  return (
    <Card title={title}>
      <div className='courses'>
        {items.map((item, i) => (
          <Fragment key={i + item.title}>
            <CourseItem {...item} />
            {i !== lastIndex && <hr className='divider' />}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
