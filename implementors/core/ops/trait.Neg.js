(function() {var implementors = {};
implementors['shared_library'] = [];implementors['wayland_client'] = [];implementors['tempfile'] = [];implementors['wayland_window'] = [];implementors['wayland_kbd'] = [];implementors['num'] = ["impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/bigint/struct.BigUint.html' title='num::bigint::BigUint'>BigUint</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='enum' href='num/bigint/enum.Sign.html' title='num::bigint::Sign'>Sign</a>","impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;'a&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/bigint/struct.BigInt.html' title='num::bigint::BigInt'>BigInt</a>","impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.Num.html' title='num::traits::Num'>Num</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;'a, T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.Num.html' title='num::traits::Num'>Num</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/complex/struct.Complex.html' title='num::complex::Complex'>Complex</a>&lt;T&gt;","impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>","impl&lt;'a, T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for &amp;'a <a class='struct' href='num/rational/struct.Ratio.html' title='num::rational::Ratio'>Ratio</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=T&gt;</span>",];implementors['cgmath'] = ["impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Matrix2.html' title='cgmath::Matrix2'>Matrix2</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Matrix3.html' title='cgmath::Matrix3'>Matrix3</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Matrix4.html' title='cgmath::Matrix4'>Matrix4</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Quaternion.html' title='cgmath::Quaternion'>Quaternion</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Vector2.html' title='cgmath::Vector2'>Vector2</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Vector3.html' title='cgmath::Vector3'>Vector3</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Vector4.html' title='cgmath::Vector4'>Vector4</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Rad.html' title='cgmath::Rad'>Rad</a>&lt;S&gt;","impl&lt;S: <a class='trait' href='cgmath/trait.BaseFloat.html' title='cgmath::BaseFloat'>BaseFloat</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='cgmath/struct.Deg.html' title='cgmath::Deg'>Deg</a>&lt;S&gt;",];implementors['nalgebra'] = ["impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec.html' title='nalgebra::DVec'>DVec</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec1.html' title='nalgebra::DVec1'>DVec1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec2.html' title='nalgebra::DVec2'>DVec2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec3.html' title='nalgebra::DVec3'>DVec3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec4.html' title='nalgebra::DVec4'>DVec4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec5.html' title='nalgebra::DVec5'>DVec5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='num/traits/trait.Zero.html' title='num::traits::Zero'>Zero</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.DVec6.html' title='nalgebra::DVec6'>DVec6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt1.html' title='nalgebra::Pnt1'>Pnt1</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt2.html' title='nalgebra::Pnt2'>Pnt2</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt3.html' title='nalgebra::Pnt3'>Pnt3</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt4.html' title='nalgebra::Pnt4'>Pnt4</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt5.html' title='nalgebra::Pnt5'>Pnt5</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Pnt6.html' title='nalgebra::Pnt6'>Pnt6</a>&lt;N&gt;","impl&lt;N: <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a>&lt;Output=N&gt; + <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/ops/trait.Neg.html' title='core::ops::Neg'>Neg</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt;",];implementors['glutin'] = [];implementors['glium'] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
