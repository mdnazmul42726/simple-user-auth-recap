import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Blog = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    return (
        <div>
            <h3 className="text-3xl">{user.displayName}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quasi labore necessitatibus consequuntur eveniet. Aliquid, dolore vero repellendus saepe ducimus voluptate quibusdam animi, consequuntur neque nihil libero! Eos harum a amet aut enim fugit nihil iusto eaque. Non dicta eius obcaecati quam amet nam, sunt nesciunt id, facere aliquid laudantium, deleniti eligendi voluptates assumenda reiciendis tenetur? Quae similique, quis accusamus autem aliquam vel est nulla magni! Animi ab, perspiciatis aperiam laboriosam ut nostrum tempora pariatur enim consectetur atque fugiat repudiandae, unde sed quod soluta iste incidunt, debitis ullam saepe mollitia quaerat autem? Cum nisi iste amet recusandae ratione dignissimos optio.</p>
        </div>
    );
};

export default Blog;