import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  return (
    <div className="flex items-center flex-col bg-black min-h-screen justify-center w-full">
      <img
        src="https://links.papareact.com/9xl"
        alt="spotify-logo"
        className="w-52 mb-5"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#1BD760] text-white rounded-full p-5"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
