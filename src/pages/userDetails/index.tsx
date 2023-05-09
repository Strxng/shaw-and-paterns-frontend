import { Box, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUserDetails, getUserRepos } from 'services/userService';
import { RepoCard } from './components/repoCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { UserDetailCard } from './components/userDetailCard';

export const UserDetails = (): JSX.Element => {
  const { username } = useParams();

  const {
    data: userDetails,
    isFetching: isFetchingUser,
    isLoading: isLoadingUser,
  } = useQuery(['user-detail', username], () => getUserDetails(username!));

  const {
    data: userRepos,
    isFetching: isFetchingRepos,
    isLoading: isLoadingRepos,
  } = useQuery(['user-repos', username], () => getUserRepos(username!));

  const renderUserRepos = (): JSX.Element => {
    if (isFetchingRepos || isLoadingRepos) {
      return <Skeleton count={10} height={80} style={{ marginBottom: 20 }} />;
    }

    return (
      <Grid container spacing={2}>
        {userRepos?.map((repo) => (
          <Grid item key={repo.id} xs={6}>
            <RepoCard
              name={repo.name}
              description={repo.description}
              language={repo.language}
              link={repo.html_url}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <UserDetailCard
            name={userDetails?.name || ''}
            bio={userDetails?.bio || ''}
            createdAt={userDetails?.created_at || ''}
            image={userDetails?.avatar_url || ''}
            isLoading={isFetchingUser || isLoadingUser}
            profileLink={userDetails?.html_url || ''}
            username={userDetails?.login || ''}
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={8}>
        {renderUserRepos()}
      </Grid>
    </Grid>
  );
};
