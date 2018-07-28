import Chip from './ui/chip';

export default ({skill}) => (
  <div>
    <Chip text={skill} />
    <style jsx>{`
      padding: 5px 0;
    `}
    </style>
  </div>
);
