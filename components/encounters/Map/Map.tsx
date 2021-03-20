import { ReactNode } from 'react';
import { startCase } from 'lodash';

import MapBossesHeading from '#components/encounters/Map/MapBossesHeading';
import Heading from '#components/Heading/Heading';
import PageLoader from '#components/PageLoader/PageLoader';
import useRouter from '#hooks/useRouter';
import { DataType } from '#types';

type MapProps = {
  children?: ReactNode;
  isLoading: boolean;
  data: DataType;
};

const Map = ({ children, isLoading, data }: MapProps) => {
  const {
    query: { category, map },
  } = useRouter();
  const heading = category === 'maps' ? map : category;
  return (
    <>
      {isLoading && <PageLoader />}
      {!isLoading && data && (
        <>
          <Heading as="h4">{startCase(heading)}</Heading>
          <MapBossesHeading data={data} />
          {children}
        </>
      )}
    </>
  );
};

export default Map;
