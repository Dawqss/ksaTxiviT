import {createSlice} from '@reduxjs/toolkit';

export interface t1 {
  allIds: string[];
  byId: unknown;
  error: unknown;
}

const initialState: t1 = {
  allIds: [],
  byId: {},
  error: null,
};

const slice = createSlice({
  name: 'clubAbout',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchClubTrophiesAndVenue.pending, state => ({
      ...state,
      isClubAboutLoading: true,
      error: null,
    }));
    builder.addCase(
      fetchClubTrophiesAndVenue.fulfilled,
      (
        state,
        {
          payload: {
            trophies: {data: clubTrophiesData},
            venue: {data: clubVenueData},
          },
          meta: {arg: teamId},
        },
      ) => {
        return {
          ...state,
          byId: {
            ...state.byId,
            [teamId]: {
              trophies: clubTrophiesData
                .filter(({status}) => status === 'Winner')
                .map(clubTrophy => ({
                  ...clubTrophy,
                  seasons: getAllTrophySeasons({
                    seasons: clubTrophy.seasons.data,
                    nonSportsMonkSeasons: clubTrophy.non_sportmonk_seasons,
                  }),
                })),
              venue: clubVenueData,
            },
          },
          isClubAboutLoading: false,
        };
      },
    );
    builder.addCase(fetchClubTrophiesAndVenue.rejected, (state, {error}) => ({
      ...state,
      isClubAboutLoading: false,
      error,
    }));
  },
});

export const {reducer: figuresReducer} = slice;
