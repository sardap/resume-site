export const hostingSite = "https://backend.sarda.dev/assets";
export const backendSite = "https://backend.sarda.dev";

export interface ProjectFilter {
    show_bad: boolean;
    languages: string[];
    technologies: Technologies[];
}

export enum Technologies {
    Docker = "Docker",
    Rest = "Rest",
    ECS = "Entity Component System",
    Postgres = "Postgres",
    Diesel = "diesel",
    Redis = "Redis",
    Flask = "Flask",
    GBA = "Game Boy Advance",
    DS = "DS",
    Unity = "Unity",
    RestGin = "REST (gin)",
    RestWarp = "REST (warp)",
    SpotifyWebApi = "Spotify web API",
    DiscordAPI = "Discord API",
    YouTubeApi = "YouTube API",
    OpenWeatherApi = "OpenWeather API",
    GithubAPI = "Github API",
    ImageGeneration = "Image generation",
    CPP20 = "C++ 20",
    MonoGame = "MonoGame",
    React = "React",
    MachineLearning = "Machine learning",
    Jen = "jennifer (go code gen)",
    BadgerDB = "Badger DB",
    Computers = "Computers",
    SwinGame = "SwinGame",
    CurseWords = "Curse words",
}
