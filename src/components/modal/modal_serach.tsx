"use client";
import { LimitString } from "@/lib/action/stringFunc";
import { IGame } from "@/models/game";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const SearchModal = () => {
  // to storage the key words for query
  const [query, setQuery] = useState("");

  // to storage the games
  const [games, setGames] = useState<IGame[]>();

  // to storage the input value
  const HandleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  // // //test
  // useEffect(() => {
  //   console.log(games);
  // }, [games]);

  //invoke the fetch func when getting the query key words
  useEffect(() => {
    const timer = setTimeout(() => {
      GetQueryResult();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  // to inquery with key words
  const GetQueryResult = async () => {
    try {
      if (!query) {
        setGames([]);
        return;
      }

      const res = await fetch(
        `${process.env.WEB_URL}/api/games/search?value=${query}`,
        {
          method: "GET",
        }
      );
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const data = await res.json();
      setGames(data);
    } catch (e) {
      console.log("Fetch failed", e);
    }
  };
  return (
    <div>
      <dialog id="search_modal" className="modal">
        <div className="modal-box overflow-y-hidden">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                setQuery("");
              }}
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Search</h3>
          <label className="input input-bordered flex items-center gap-2">
            <img
              src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
              alt="icon"
              className="w-6 h-6"
            />
            <input
              type="search"
              className="grow"
              placeholder="Search"
              onChange={HandleInputValue}
              value={query}
            />
          </label>
          <div className="mt-3">
            <ResultPad games={games} keywords={query} setQuery={setQuery} />
          </div>
        </div>
      </dialog>
    </div>
  );
};

// receive a game type array to pass single element to children components, keywords to
//verify query words is empty or not, and a func to reset query words after close

export const ResultPad = ({
  games,
  keywords,
  setQuery,
}: {
  games: IGame[] | undefined;
  keywords: string;
  setQuery: any;
}) => {
  const router = useRouter();

  const SelectGame = (id: string) => {
    const modal = document.getElementById(
      "search_modal"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.close();
      setQuery("");
      router.push(`/pages/game/${id}`);
    }
  };
  return (
    <div className="w-[29rem] h-[29rem] overflow-y-auto">
      {keywords.length > 0 ? (
        <div>
          {games && games.length > 0 ? (
            games.map((item, index) => (
              <div key={index} onClick={() => SelectGame(item.id)}>
                <ResultItem game={item} />
              </div>
            ))
          ) : (
            <div className="text-center mt-10">no result</div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

//receive a game type data to fill full blank
export const ResultItem = ({ game }: { game: IGame }) => {
  return (
    <div className="flex flex-row justify-start w-full h-[18sem] px-2 my-2 space-x-2 hover:bg-gray-300 rounded-lg">
      <img
        className="w-[5rem] h-[5rem] object-cover rounded-lg"
        src={game.images}
        alt="icon"
      />
      <div className="flex flex-col">
        <div className="font-bold">{LimitString(game.name, 40)}</div>
        <div className="mt-2">{game.developer}</div>
        <div className="flex flex-row space-x-2">
          <div>{game.release}</div>
          <div>{game.platform}</div>
        </div>
      </div>
    </div>
  );
};
