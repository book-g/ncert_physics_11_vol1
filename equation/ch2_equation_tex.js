var instantaneous_velocity = `v = \lim_{\Delta\rightarrow 0} \vec{v} = \lim_{\Delta\rightarrow 0} \frac{\Delta x}{\Delta t} = \frac{dx}{dt}`;
var average_acceleration = `\displaystyle{\vec{a}=\frac{\Delta v}{\Delta t}}`;
var instantaneous_acceleration = `a = \lim_{\Delta\rightarrow 0} \vec{a} = \lim_{\Delta\rightarrow 0} \frac{\Delta v}{\Delta t} = \frac{dv}{dt}`;
var Kinematic_equations_of_motion =  `v = v_0 + at \\ x = v_0t+ \frac{1}{2} at^2 \\ v^2 = v_0^2 + 2ax`;

module.exports = {
    instantaneous_velocity,average_acceleration,instantaneous_acceleration,Kinematic_equations_of_motion
};