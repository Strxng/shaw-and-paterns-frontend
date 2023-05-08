import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getUserDetails, getUserRepos } from 'services/userService';
import { RepoCard } from './components/repoCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  const renderUserProfile = (): JSX.Element => {
    if (isFetchingUser || isLoadingUser) {
      return <Skeleton height={500} width={350} />;
    }

    return (
      <Card sx={{ width: 350, maxHeight: 500 }}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Box
              component={'img'}
              src={userDetails?.avatar_url}
              sx={{ width: 300, borderRadius: '50%', mb: 3 }}
            />
          </Box>
          <Box sx={{ p: 2 }}>
            <Typography variant="h5" fontWeight={500} color="text.primary">
              {userDetails?.name}
            </Typography>
            <Typography color="text.secondary">{userDetails?.login}</Typography>
            <Typography color="text.secondary">{userDetails?.bio}</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };

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
        {renderUserProfile()}
      </Grid>
      <Grid item xs={12} lg={8}>
        {renderUserRepos()}
      </Grid>
    </Grid>
  );
};
