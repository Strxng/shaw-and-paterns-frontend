import { Card, CardContent, Typography } from '@mui/material';

interface RepoCardProps {
  name: string;
  description: string;
  link: string;
  language: string;
}

export const RepoCard = ({
  name,
  description,
  language,
  link,
}: RepoCardProps): JSX.Element => {
  return (
    <Card
      variant="outlined"
      onClick={() => window.open(link, '_blank')}
      sx={{ cursor: 'pointer' }}
    >
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography color={'text.secondary'} variant="subtitle2">
          {description}
        </Typography>
        <br />
        <Typography color={'text.secondary'} variant="caption">
          Language: {language || 'Not informed'}
        </Typography>
      </CardContent>
    </Card>
  );
};
