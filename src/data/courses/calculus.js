export const calculusCourse = {
  id: 'BMAT101L',
  code: 'BAMAT101',
  title: 'Multivariable Calculus and Differential Equations',
  shortTitle: 'Multivariable Calculus',
  category: 'University Core',
  credits: 4,
  semester: 'Fall Semester 2026-27',
  color: 'indigo',
  badge: 'Official VIT VTOP Syllabus (5 Modules)',
  description: 'Complete Study Textbook, Step-by-Step Derivations & VIT FAT Question Bank aligned with VIT BAMAT101 Official Syllabus, VIT Department of Mathematics Question Bank, and VIT FAT Past Papers.',
  targetMarks: {
    cat1: '50 Marks (Modules 1 & 2)',
    cat2: '50 Marks (Modules 3 & 4)',
    fat: '100 Marks (All 5 Modules)'
  },
  modules: [
    {
      id: 'bamat-m1',
      moduleNum: 1,
      pdfUrl: '/pdfs/calculus/Math_MOD-1.pdf',
      title: 'Differential Calculus & Functions of Several Variables',
      co: 'CO: 1',
      examScope: 'CAT-1 & FAT',
      weightage: '20-25 Marks',
      status: 'not_confident',
      scope: 'Limits, Continuity, Partial Derivatives, Total Differentiation, Euler\'s Theorem on Homogeneous Functions, Chain Rule, Jacobian Determinants, Taylor\'s and Maclaurin\'s Series for Two Variables, Maxima and Minima, and Lagrange\'s Method of Undetermined Multipliers.',
      blueprint: {
        marksTotal: '20-25 Marks in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Euler\'s theorem on homogeneous functions: Proving composite identities $x u_x + y u_y = g(u)$ and $x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = g(u)[g\'(u)-1]$ when $u = \\tan^{-1}\\left(\\frac{x^3+y^3}{x-y}\\right)$ or $u = \\sin^{-1}\\left(\\frac{x+y}{\\sqrt{x}+\\sqrt{y}}\\right)$.' },
          { type: 'Question Type B (10 Marks)', desc: 'Unconstrained & Constrained Optimization: Finding stationary points and classifying local maxima, minima, or saddle points using Hessian $D = rt - s^2$, or finding dimensions of rectangular boxes / cylinders using Lagrange Multipliers.' },
          { type: 'Question Type C (10 Marks)', desc: 'Jacobian of Transformations: Calculating $\\frac{\\partial(u,v)}{\\partial(x,y)}$ and verifying reciprocity $J \\cdot J\' = 1$, or expanding $f(x,y)$ using Taylor\'s theorem around point $(a, b)$ up to 2nd/3rd degree.' }
        ]
      },
      formulaSheet: [
        { name: 'Euler\'s Theorem (First Order)', formula: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u', note: 'Applies directly when u is homogeneous of degree n' },
        { name: 'Euler\'s Theorem for Composite Functions', formula: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\frac{f(u)}{f\'(u)} = g(u)', note: 'When f(u) is homogeneous of degree n' },
        { name: 'Euler\'s Second Order Identity', formula: 'x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = g(u)[g\'(u) - 1]', note: 'Derived by differentiating Euler\'s 1st order identity' },
        { name: 'Hessian Test for Local Extrema', formula: 'D = rt - s^2 = \\left(\\frac{\\partial^2 f}{\\partial x^2}\\right)\\left(\\frac{\\partial^2 f}{\\partial y^2}\\right) - \\left(\\frac{\\partial^2 f}{\\partial x \\partial y}\\right)^2', note: 'D > 0, r < 0: Local Max; D > 0, r > 0: Local Min; D < 0: Saddle point; D = 0: Inconclusive' },
        { name: 'Lagrange Multipliers System', formula: '\\nabla f(x, y, z) = \\lambda \\nabla g(x, y, z) \\implies \\frac{f_x}{g_x} = \\frac{f_y}{g_y} = \\frac{f_z}{g_z} = \\lambda', note: 'Subject to constraint g(x, y, z) = c' },
        { name: 'Two-Variable Taylor Series', formula: 'f(a+h, b+k) = f(a,b) + (h f_x + k f_y) + \\frac{1}{2!}(h^2 f_{xx} + 2hk f_{xy} + k^2 f_{yy}) + \\dots', note: 'Expanded around base point (a, b)' }
      ],
      examInsights: [
        {
          title: 'The Composite Euler Substitution Trap',
          desc: 'In questions where $u = \\tan^{-1}\\left(\\frac{x^3+y^3}{x-y}\\right)$, DO NOT apply Euler directly to $u$ because $\\tan^{-1}$ is NOT homogeneous! You must set $z = \\tan(u) = \\frac{x^3+y^3}{x-y}$. Test degree: $z(tx, ty) = \\frac{t^3(x^3+y^3)}{t(x-y)} = t^2 z$, so $z$ has degree $n = 2$. Then use $x u_x + y u_y = 2\\frac{\\tan u}{\\sec^2 u} = \\sin(2u)$.'
        },
        {
          title: 'Verifying Lagrange Extrema vs Boundary Points',
          desc: 'When using Lagrange multipliers to find maximum volume or minimum surface area, you must verify the nature of the critical point by evaluating physical boundaries (e.g., as $x \\to 0$, $S \\to \\infty$, proving the stationary point is a global minimum).'
        }
      ],
      topics: [
        {
          id: 't1-1',
          title: 'Topic 1: Homogeneous Functions & Euler\'s Theorem Masterclass',
          theory: 'A function $f(x, y)$ is homogeneous of degree $n$ if $f(tx, ty) = t^n f(x, y)$ for all $t > 0$.\nDifferentiating with respect to $t$ via the multivariable chain rule:\n$$\\frac{d}{dt} f(tx, ty) = x f_x(tx, ty) + y f_y(tx, ty) = n t^{n-1} f(x, y)$$\nSetting $t = 1$ yields Euler\'s First Theorem:\n$$x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = n f(x, y)$$\nDifferentiating again with respect to $x$ and $y$ and combining terms gives the second-order theorem:\n$$x^2 \\frac{\\partial^2 f}{\\partial x^2} + 2xy \\frac{\\partial^2 f}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 f}{\\partial y^2} = n(n - 1) f(x, y)$$'
        },
        {
          id: 't1-2',
          title: 'Topic 2: Unconstrained Maxima, Minima & Saddle Points',
          theory: 'For a function of two variables $z = f(x, y)$:\n1. Find stationary points by solving system $f_x = 0$ and $f_y = 0$.\n2. Compute second partial derivatives at each stationary point $(a, b)$:\n$$r = \\frac{\\partial^2 f}{\\partial x^2}, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y}, \\quad t = \\frac{\\partial^2 f}{\\partial y^2}$$\n3. Calculate discriminant $D = rt - s^2$:\n- If $D > 0$ and $r < 0$, $f(a, b)$ is a local maximum.\n- If $D > 0$ and $r > 0$, $f(a, b)$ is a local minimum.\n- If $D < 0$, $(a, b)$ is a saddle point (neither max nor min).\n- If $D = 0$, test is inconclusive.'
        },
        {
          id: 't1-3',
          title: 'Topic 3: Constrained Optimization via Lagrange Multipliers',
          theory: 'To optimize $f(x, y, z)$ subject to constraint $g(x, y, z) = c$:\nConstruct the auxiliary Lagrangian function $L(x, y, z, \\lambda) = f(x, y, z) - \\lambda [g(x, y, z) - c]$.\nSetting gradient $\\nabla L = 0$ gives:\n$$f_x = \\lambda g_x, \\quad f_y = \\lambda g_y, \\quad f_z = \\lambda g_z, \\quad g(x, y, z) = c$$\nSolve these 4 simultaneous algebraic equations to find critical points and compare function values.'
        }
      ],
      pyqs: [
      {
            "id": "bamat-q1-1",
            "exam": "BMAT101L FAT Nov 2024 Slot A1 / QB Q2",
            "marks": "10 Marks",
            "question": "If $u = \\tan^{-1}\\left(\\frac{x^3 + y^3}{x - y}\\right)$, prove that:\n(a) $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\sin(2u)$\n(b) $x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = 2\\cos(3u)\\sin(u)$",
            "solution": "Step 1 (Transform to homogeneous function):\nLet $z = \\tan(u) = \\frac{x^3+y^3}{x-y}$. Testing degree:\n$$z(tx, ty) = \\frac{t^3(x^3+y^3)}{t(x-y)} = t^2 \\frac{x^3+y^3}{x-y} = t^2 z(x, y)$$\nHence $z$ is a homogeneous function of degree $n = 2$.\n\nStep 2 (Apply Euler's Theorem for Part a):\nBy Euler's theorem on $z$:\n$$x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = 2z$$\nSince $z = \\tan(u)$, we have $\\frac{\\partial z}{\\partial x} = \\sec^2(u) \\frac{\\partial u}{\\partial x}$ and $\\frac{\\partial z}{\\partial y} = \\sec^2(u) \\frac{\\partial u}{\\partial y}$:\n$$\\sec^2(u) \\left(x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}\\right) = 2\\tan(u)$$\n$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\frac{2\\tan(u)}{\\sec^2(u)} = 2\\sin(u)\\cos(u) = \\sin(2u) \\quad [\\text{Proved (a)}]$$\n\nStep 3 (Derive Second-Order Identity for Part b):\nLet $g(u) = \\sin(2u)$. Using standard composite second-order formula:\n$$x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = g(u)[g'(u) - 1]$$\nHere $g'(u) = 2\\cos(2u)$. Substituting:\n$$= \\sin(2u)[2\\cos(2u) - 1] = 2\\sin(2u)\\cos(2u) - \\sin(2u) = \\sin(4u) - \\sin(2u)$$\nUsing $\\sin A - \\sin B = 2\\cos\\left(\\frac{A+B}{2}\\right)\\sin\\left(\\frac{A-B}{2}\\right)$ with $A=4u, B=2u$:\n$$= 2\\cos\\left(\\frac{6u}{2}\\right)\\sin\\left(\\frac{2u}{2}\\right) = 2\\cos(3u)\\sin(u) \\quad [\\text{Proved (b)}]$$\nBoth parts are verified with full marks."
      },
      {
            "id": "bamat-q1-2",
            "exam": "BMAT101L FAT April 2025 Slot B1 / QB Q14",
            "marks": "10 Marks",
            "question": "Find the maximum and minimum values of $f(x, y) = x^3 + y^3 - 3axy$ where $a > 0$.",
            "solution": "Step 1 (Find stationary points):\n$$\\frac{\\partial f}{\\partial x} = 3x^2 - 3ay = 0 \\implies x^2 = ay \\implies y = \\frac{x^2}{a}$$\n$$\\frac{\\partial f}{\\partial y} = 3y^2 - 3ax = 0 \\implies y^2 = ax$$\nSubstitute $y = x^2/a$ into second equation:\n$$\\left(\\frac{x^2}{a}\\right)^2 = ax \\implies \\frac{x^4}{a^2} = ax \\implies x(x^3 - a^3) = 0$$\nReal solutions are $x = 0$ or $x = a$.\n- If $x = 0 \\implies y = 0$. Stationary point $P_1(0, 0)$.\n- If $x = a \\implies y = a^2/a = a$. Stationary point $P_2(a, a)$.\n\nStep 2 (Compute second partial derivatives):\n$$r = \\frac{\\partial^2 f}{\\partial x^2} = 6x, \\quad s = \\frac{\\partial^2 f}{\\partial x \\partial y} = -3a, \\quad t = \\frac{\\partial^2 f}{\\partial y^2} = 6y$$\nDiscriminant: $D = rt - s^2 = (6x)(6y) - (-3a)^2 = 36xy - 9a^2$.\n\nStep 3 (Classify stationary points):\n1. At $P_1(0, 0)$:\n$$D = 36(0)(0) - 9a^2 = -9a^2 < 0$$\nSince $D < 0$, $(0, 0)$ is a Saddle Point (neither maximum nor minimum).\n\n2. At $P_2(a, a)$:\n$$D = 36(a)(a) - 9a^2 = 36a^2 - 9a^2 = 27a^2 > 0$$\n$$r = 6a > 0 \\quad (\\text{since } a > 0)$$\nSince $D > 0$ and $r > 0$, $f(x, y)$ attains a local minimum at $(a, a)$.\n\nStep 4 (Calculate minimum value):\n$$f_{\\min} = f(a, a) = a^3 + a^3 - 3a(a)(a) = 2a^3 - 3a^3 = -a^3$$\nBoxed Answer: Local minimum at $(a, a)$ with value $-a^3$; saddle point at $(0, 0)$."
      },
      {
            "id": "bamat-q1-3",
            "exam": "VIT Question Bank Q18 & FAT Nov 2024 Slot A1 \u2014 10 Marks",
            "marks": "10 Marks",
            "question": "Find the dimensions of a rectangular box open at the top of maximum volume, given that the total surface area is 108 sq. cm, using Lagrange's method of undetermined multipliers.",
            "solution": "Step 1 (Formulate Objective & Constraint):\nLet dimensions of open box be length $x$, breadth $y$, height $z$ ($x, y, z > 0$).\n- Surface area: $S(x, y, z) = xy + 2xz + 2yz = 108$.\n- Volume to maximize: $V(x, y, z) = xyz$.\n\nStep 2 (Form Lagrange System):\n$F(x, y, z, \\lambda) = xyz + \\lambda(xy + 2xz + 2yz - 108)$\nSetting partial derivatives to zero:\n1. $F_x = yz + \\lambda(y + 2z) = 0 \\implies \\lambda = -\\frac{yz}{y + 2z}$\n2. $F_y = xz + \\lambda(x + 2z) = 0 \\implies \\lambda = -\\frac{xz}{x + 2z}$\n3. $F_z = xy + \\lambda(2x + 2y) = 0 \\implies \\lambda = -\\frac{xy}{2(x + y)}$\n\nStep 3 (Solve Symmetric System):\nEquating $\\lambda$ from (1) and (2):\n$\\frac{yz}{y + 2z} = \\frac{xz}{x + 2z} \\implies y(x + 2z) = x(y + 2z) \\implies 2yz = 2xz \\implies x = y$\nEquating (1) and (3) with $x = y$:\n$\\frac{xz}{x + 2z} = \\frac{x^2}{4x} = \\frac{x}{4} \\implies 4z = x + 2z \\implies x = 2z \\implies z = \\frac{x}{2}$\n\nStep 4 (Substitute into Constraint):\n$x(x) + 2x\\left(\\frac{x}{2}\\right) + 2x\\left(\\frac{x}{2}\\right) = 108 \\implies 3x^2 = 108 \\implies x^2 = 36 \\implies x = 6\\text{ cm}$\nSince $y = x = 6\\text{ cm}$ and $z = x/2 = 3\\text{ cm}$:\nMaximum Volume: $V_{\\max} = 6 \\times 6 \\times 3 = 108\\text{ cm}^3$.\nBoxed Answer: Dimensions are $6\\text{ cm} \\times 6\\text{ cm} \\times 3\\text{ cm}$ with maximum volume $108\\text{ cm}^3$."
      },
      {
            "id": "bamat-q1-4",
            "exam": "VIT Question Bank Q22 & FAT April 2025 Slot B1 \u2014 10 Marks",
            "marks": "10 Marks",
            "question": "If $u = \\frac{yz}{x}, v = \\frac{zx}{y}, w = \\frac{xy}{z}$, evaluate the Jacobian determinant $\\frac{\\partial(u, v, w)}{\\partial(x, y, z)}$ and verify the reciprocal identity $J \\cdot J' = 1$.",
            "solution": "Step 1 (Compute Partial Derivatives):\n- $\\frac{\\partial u}{\\partial x} = -\\frac{yz}{x^2}, \\quad \\frac{\\partial u}{\\partial y} = \\frac{z}{x}, \\quad \\frac{\\partial u}{\\partial z} = \\frac{y}{x}$\n- $\\frac{\\partial v}{\\partial x} = \\frac{z}{y}, \\quad \\frac{\\partial v}{\\partial y} = -\\frac{zx}{y^2}, \\quad \\frac{\\partial v}{\\partial z} = \\frac{x}{y}$\n- $\\frac{\\partial w}{\\partial x} = \\frac{y}{z}, \\quad \\frac{\\partial w}{\\partial y} = \\frac{x}{z}, \\quad \\frac{\\partial w}{\\partial z} = -\\frac{xy}{z^2}$\n\nStep 2 (Evaluate Jacobian $J$):\nFactoring $1/x^2$ from row 1, $1/y^2$ from row 2, $1/z^2$ from row 3, and $yz, xz, xy$ from columns:\n$$J = \\begin{vmatrix} -1 & 1 & 1 \\\\ 1 & -1 & 1 \\\\ 1 & 1 & -1 \\end{vmatrix} = -1(1 - 1) - 1(-1 - 1) + 1(1 + 1) = 0 + 2 + 2 = 4$$\nHence $J = 4$.\n\nStep 3 (Verify $J \\cdot J' = 1$):\nMultiplying variables gives $uv = z^2 \\implies z = \\sqrt{uv}, vw = x^2 \\implies x = \\sqrt{vw}, wu = y^2 \\implies y = \\sqrt{wu}$.\nComputing $J' = \\frac{\\partial(x, y, z)}{\\partial(u, v, w)}$ gives $J' = 1/4$.\nThus $J \\cdot J' = 4 \\times \\frac{1}{4} = 1 \\quad [\\text{Verified}]$."
      },
      {
            "id": "bamat-q1-5",
            "exam": "VIT Question Bank Sheet 1 Q1 \u2014 Path Limits & Continuity",
            "marks": "5 Marks",
            "question": "Show that $\\lim_{(x, y) \\to (0, 0)} \\frac{x^2 y}{x^4 + y^2}$ does not exist by testing along parabolic and linear paths.",
            "solution": "Step 1 (Test along linear paths $y = mx$):\n$$\\lim_{x \\to 0} \\frac{x^2(mx)}{x^4 + (mx)^2} = \\lim_{x \\to 0} \\frac{m x^3}{x^2(x^2 + m^2)} = \\lim_{x \\to 0} \\frac{mx}{x^2 + m^2} = \\frac{0}{m^2} = 0$$\nAlong all straight lines $y = mx$, the limit is 0.\n\nStep 2 (Test along parabolic paths $y = mx^2$):\nDegree of $x^4$ equals degree of $y^2 = (m x^2)^2 = m^2 x^4$. Evaluating:\n$$\\lim_{x \\to 0} \\frac{x^2(mx^2)}{x^4 + (mx^2)^2} = \\lim_{x \\to 0} \\frac{m x^4}{x^4(1 + m^2)} = \\frac{m}{1 + m^2}$$\nFor $m = 1$, the limit is $\\frac{1}{2}$; for $m = 2$, the limit is $\\frac{2}{5}$.\n\nConclusion:\nSince the limit value depends on the path parameter $m$, the two-variable limit does not exist."
      },
      {
            "id": "bamat-q1-6",
            "exam": "VIT Question Bank Sheet 1 Q6 & FAT 2024 \u2014 Composite Euler Theorem",
            "marks": "10 Marks",
            "question": "If $u = \\sin^{-1}\\left(\\frac{x+y}{\\sqrt{x}+\\sqrt{y}}\\right)$, prove that:\n(a) $x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\frac{1}{2}\\tan u$\n(b) $x^2 \\frac{\\partial^2 u}{\\partial x^2} + 2xy \\frac{\\partial^2 u}{\\partial x \\partial y} + y^2 \\frac{\\partial^2 u}{\\partial y^2} = \\frac{\\tan u}{4}(\\tan^2 u - 1)$",
            "solution": "Step 1 (Identify Degree of Homogeneous Function):\nLet $z = \\sin u = \\frac{x+y}{\\sqrt{x}+\\sqrt{y}}$.\n$$z(tx, ty) = \\frac{tx + ty}{\\sqrt{tx} + \\sqrt{ty}} = \\frac{t(x+y)}{\\sqrt{t}(\\sqrt{x}+\\sqrt{y})} = t^{1/2} z(x, y)$$\nSo $z$ is homogeneous of degree $n = 1/2$.\n\nStep 2 (Euler First Order Theorem):\n$$x \\frac{\\partial z}{\\partial x} + y \\frac{\\partial z}{\\partial y} = \\frac{1}{2} z$$\nSince $z = \\sin u$, $\\frac{\\partial z}{\\partial x} = \\cos u \\frac{\\partial u}{\\partial x}$ and $\\frac{\\partial z}{\\partial y} = \\cos u \\frac{\\partial u}{\\partial y}$:\n$$\\cos u \\left(x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y}\\right) = \\frac{1}{2}\\sin u \\implies x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\frac{1}{2}\\tan u \\quad [\\text{Proved (a)}]$$\n\nStep 3 (Euler Second Order Theorem):\nLet $g(u) = \\frac{1}{2}\\tan u$. Then $g'(u) = \\frac{1}{2}\\sec^2 u$.\n$$x^2 u_{xx} + 2xy u_{xy} + y^2 u_{yy} = g(u)[g'(u) - 1] = \\frac{1}{2}\\tan u \\left[\\frac{1}{2}\\sec^2 u - 1\\right]$$\nSince $\\sec^2 u = 1 + \\tan^2 u$:\n$$= \\frac{1}{2}\\tan u \\left[\\frac{1 + \\tan^2 u - 2}{2}\\right] = \\frac{\\tan u}{4}(\\tan^2 u - 1) \\quad [\\text{Proved (b)}]$$\nBoth parts verified rigorously."
      },
      {
            "id": "bamat-q1-7",
            "exam": "VIT Question Bank Sheet 1 Q12 \u2014 Multivariable Chain Rule",
            "marks": "10 Marks",
            "question": "If $z = f(x, y)$ where $x = e^u \\cos v$ and $y = e^u \\sin v$, show that:\n$$\\left(\\frac{\\partial z}{\\partial x}\\right)^2 + \\left(\\frac{\\partial z}{\\partial y}\\right)^2 = e^{-2u} \\left[\\left(\\frac{\\partial z}{\\partial u}\\right)^2 + \\left(\\frac{\\partial z}{\\partial v}\\right)^2\\right]$$",
            "solution": "Step 1 (Compute Partial Derivatives with respect to $u$ and $v$ via Chain Rule):\n$$\\frac{\\partial z}{\\partial u} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial u} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial u} = \\frac{\\partial z}{\\partial x}(e^u \\cos v) + \\frac{\\partial z}{\\partial y}(e^u \\sin v)$$\n$$\\frac{\\partial z}{\\partial v} = \\frac{\\partial z}{\\partial x}\\frac{\\partial x}{\\partial v} + \\frac{\\partial z}{\\partial y}\\frac{\\partial y}{\\partial v} = \\frac{\\partial z}{\\partial x}(-e^u \\sin v) + \\frac{\\partial z}{\\partial y}(e^u \\cos v)$$\n\nStep 2 (Square and Add both equations):\n$$\\left(\\frac{\\partial z}{\\partial u}\\right)^2 = e^{2u} [z_x^2 \\cos^2 v + z_y^2 \\sin^2 v + 2 z_x z_y \\sin v \\cos v]$$\n$$\\left(\\frac{\\partial z}{\\partial v}\\right)^2 = e^{2u} [z_x^2 \\sin^2 v + z_y^2 \\cos^2 v - 2 z_x z_y \\sin v \\cos v]$$\nAdding gives:\n$$\\left(\\frac{\\partial z}{\\partial u}\\right)^2 + \\left(\\frac{\\partial z}{\\partial v}\\right)^2 = e^{2u} [z_x^2(\\cos^2 v + \\sin^2 v) + z_y^2(\\sin^2 v + \\cos^2 v)] = e^{2u} [z_x^2 + z_y^2]$$\n\nStep 3 (Divide by $e^{2u}$):\n$$z_x^2 + z_y^2 = e^{-2u} \\left[\\left(\\frac{\\partial z}{\\partial u}\\right)^2 + \\left(\\frac{\\partial z}{\\partial v}\\right)^2\\right]$$\nHence verified."
      },
      {
            "id": "bamat-q1-8",
            "exam": "VIT Question Bank Sheet 1 Q16 \u2014 Jacobian Functional Dependence",
            "marks": "8 Marks",
            "question": "Show that $u = \\frac{x+y}{1-xy}$ and $v = \\tan^{-1} x + \\tan^{-1} y$ are functionally dependent, and find the functional relationship between them.",
            "solution": "Step 1 (Compute Jacobian $J = \\frac{\\partial(u, v)}{\\partial(x, y)}$):\n- $\\frac{\\partial u}{\\partial x} = \\frac{(1-xy)(1) - (x+y)(-y)}{(1-xy)^2} = \\frac{1+y^2}{(1-xy)^2}$\n- $\\frac{\\partial u}{\\partial y} = \\frac{1+x^2}{(1-xy)^2}$\n- $\\frac{\\partial v}{\\partial x} = \\frac{1}{1+x^2}, \\quad \\frac{\\partial v}{\\partial y} = \\frac{1}{1+y^2}$\n\nStep 2 (Evaluate Determinant):\n$$J = \\begin{vmatrix} \\frac{1+y^2}{(1-xy)^2} & \\frac{1+x^2}{(1-xy)^2} \\\\ \\frac{1}{1+x^2} & \\frac{1}{1+y^2} \\end{vmatrix} = \\frac{1+y^2}{(1-xy)^2}\\cdot \\frac{1}{1+y^2} - \\frac{1+x^2}{(1-xy)^2}\\cdot \\frac{1}{1+x^2} = \\frac{1}{(1-xy)^2} - \\frac{1}{(1-xy)^2} = 0$$\nSince $J = 0$, $u$ and $v$ are functionally dependent.\n\nStep 3 (Find Functional Relationship):\nBy standard inverse trigonometric identity:\n$$v = \\tan^{-1} x + \\tan^{-1} y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right) = \\tan^{-1}(u) \\implies u = \\tan v$$\nBoxed Answer: Functionally dependent ($J = 0$); relationship is $u = \\tan v$."
      },
      {
            "id": "bamat-q1-9",
            "exam": "VIT Question Bank Sheet 1 Q20 \u2014 Taylor Series Expansion",
            "marks": "10 Marks",
            "question": "Expand $f(x, y) = e^x \\cos y$ in powers of $(x - 1)$ and $(y - \\frac{\\pi}{4})$ up to second-degree terms.",
            "solution": "Step 1 (Base point $(a, b) = (1, \\pi/4)$):\n- $f(1, \\pi/4) = e^1 \\cos(\\pi/4) = \\frac{e}{\\sqrt{2}}$.\n- $f_x = e^x \\cos y \\implies f_x(1, \\pi/4) = \\frac{e}{\\sqrt{2}}$.\n- $f_y = -e^x \\sin y \\implies f_y(1, \\pi/4) = -\\frac{e}{\\sqrt{2}}$.\n- $f_{xx} = e^x \\cos y \\implies f_{xx}(1, \\pi/4) = \\frac{e}{\\sqrt{2}}$.\n- $f_{xy} = -e^x \\sin y \\implies f_{xy}(1, \\pi/4) = -\\frac{e}{\\sqrt{2}}$.\n- $f_{yy} = -e^x \\cos y \\implies f_{yy}(1, \\pi/4) = -\\frac{e}{\\sqrt{2}}$.\n\nStep 2 (Apply Taylor Formula):\nLet $h = (x - 1)$ and $k = (y - \\pi/4)$:\n$$f(x, y) = f(a, b) + (h f_x + k f_y) + \\frac{1}{2!}(h^2 f_{xx} + 2hk f_{xy} + k^2 f_{yy}) + \\dots$$\nSubstituting values with common factor $\\frac{e}{\\sqrt{2}}$:\n$$f(x, y) = \\frac{e}{\\sqrt{2}} \\left[1 + (x - 1) - \\left(y - \\frac{\\pi}{4}\\right) + \\frac{1}{2}(x - 1)^2 - (x - 1)\\left(y - \\frac{\\pi}{4}\\right) - \\frac{1}{2}\\left(y - \\frac{\\pi}{4}\\right)^2\\right]$$\nBoxed Answer: Taylor expansion verified up to second-degree terms."
      },
      {
            "id": "bamat-q1-10",
            "exam": "VIT Question Bank Sheet 1 Q25 \u2014 Lagrange Extrema on Sphere",
            "marks": "10 Marks",
            "question": "Find the maximum and minimum values of $f(x, y, z) = 2x + 3y - z$ on the sphere $x^2 + y^2 + z^2 = 14$ using Lagrange's multipliers.",
            "solution": "Step 1 (Setup Lagrangian):\n$F(x, y, z, \\lambda) = 2x + 3y - z - \\lambda(x^2 + y^2 + z^2 - 14)$.\nSetting gradient $\\nabla F = 0$:\n- $F_x = 2 - 2\\lambda x = 0 \\implies x = 1/\\lambda$\n- $F_y = 3 - 2\\lambda y = 0 \\implies y = 3/(2\\lambda)$\n- $F_z = -1 - 2\\lambda z = 0 \\implies z = -1/(2\\lambda)$\n\nStep 2 (Substitute into Constraint):\n$$x^2 + y^2 + z^2 = \\frac{1}{\\lambda^2} + \\frac{9}{4\\lambda^2} + \\frac{1}{4\\lambda^2} = \\frac{14}{4\\lambda^2} = 14$$\n$$\\implies 14 = 56\\lambda^2 \\implies \\lambda^2 = \\frac{14}{56} = \\frac{1}{4} \\implies \\lambda = \\pm \\frac{1}{2}$$\n\nStep 3 (Evaluate Critical Points and Function Values):\n- Case 1: $\\lambda = 1/2 \\implies x = 2, y = 3, z = -1$.\n$$f(2, 3, -1) = 2(2) + 3(3) - (-1) = 4 + 9 + 1 = 14 \\quad (\\text{Maximum})$$\n- Case 2: $\\lambda = -1/2 \\implies x = -2, y = -3, z = 1$.\n$$f(-2, -3, 1) = 2(-2) + 3(-3) - (1) = -4 - 9 - 1 = -14 \\quad (\\text{Minimum})$$\nBoxed Answer: Maximum value is $14$ at $(2, 3, -1)$; Minimum value is $-14$ at $(-2, -3, 1)$."
      }
]
    },
    {
      id: 'bamat-m2',
      moduleNum: 2,
      pdfUrl: '/pdfs/calculus/Math_MOD-2.pdf',
      title: 'Multiple Integrals (CO: 2)',
      co: 'CO: 2',
      examScope: 'CAT-1 & FAT',
      weightage: '20-25 Marks in FAT',
      status: 'not_confident',
      scope: 'Change of variables between Cartesian and polar coordinates, Evaluation of triple integrals-1, Evaluation of triple integrals-2, Change of variables between Cartesian and cylindrical coordinates, Change of variables between Cartesian and spherical coordinates, Change of variables for object recognition, Multiple integrals in image analysis for density and moments.',
      blueprint: {
        marksTotal: '20 to 25 Marks across two 10-mark questions in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Double Integrals & Change of Order of Integration: Evaluating non-elementary integrands like $\\int_0^1 \\int_x^1 e^{y^2} dy dx$ or $\\int_0^8 \\int_{y^{1/3}}^2 \\sqrt{x^4+1} dx dy$ by reversing integration strips.' },
          { type: 'Question Type B (10 Marks)', desc: 'Triple Integrals in Cylindrical & Spherical coordinates: Computing volume below paraboloid $z = 8 - x^2 - y^2$ and above cone $z = -\\sqrt{4x^2+4y^2}$, or volume of ice-cream cone bounded by sphere $x^2+y^2+z^2=a^2$ and cone $z=\\sqrt{x^2+y^2}$.' },
          { type: 'Question Type C (10 Marks)', desc: 'Applied Computer Vision / Image Moments: Computing total image intensity $M_{00}$, centroid $(\\bar{x}, \\bar{y})$, and moment of inertia $I_0$ for continuous density function $\\rho(x, y) = k\\sqrt{x^2+y^2}$, or Jacobian affine transform for object template matching.' }
        ]
      },
      formulaSheet: [
        { name: 'Polar Coordinate Transformation', formula: 'x = r\\cos\\theta, \\quad y = r\\sin\\theta, \\quad x^2+y^2=r^2, \\quad dx\\,dy = r\\,dr\\,d\\theta', note: 'Jacobian |J| = r' },
        { name: 'General 2D Transformation', formula: '\\iint_R f(x,y)\\,dx\\,dy = \\iint_{R^*} f(x(u,v), y(u,v)) |J|\\,du\\,dv, \\quad J = \\frac{\\partial(x,y)}{\\partial(u,v)}', note: 'For ellipse x^2/a^2 + y^2/b^2 <= 1: x = ar cos theta, y = br sin theta, |J| = abr' },
        { name: 'Cylindrical Coordinate Element', formula: 'x = r\\cos\\theta, \\, y = r\\sin\\theta, \\, z = z, \\quad dV = r\\,dz\\,dr\\,d\\theta', note: 'Jacobian |J| = r. Use for paraboloids and cylinders' },
        { name: 'Spherical Coordinate Element', formula: 'x = \\rho\\sin\\phi\\cos\\theta, \\, y = \\rho\\sin\\phi\\sin\\theta, \\, z = \\rho\\cos\\phi, \\quad dV = \\rho^2 \\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta', note: 'Jacobian |J| = \\rho^2 \\sin\\phi. Full sphere phi in [0, pi], Upper hemisphere phi in [0, pi/2]' },
        { name: 'Standard Tetrahedron Setup', formula: '\\int_{x=0}^a \\int_{y=0}^{b(1-x/a)} \\int_{z=0}^{c(1-x/a-y/b)} f(x, y, z)\\,dz\\,dy\\,dx', note: 'For plane x/a + y/b + z/c = 1' },
        { name: 'Image Moments & Centroid', formula: 'M_{00} = \\iint_R \\rho(x,y)\\,dA, \\quad \\bar{x} = \\frac{M_{10}}{M_{00}}, \\quad \\bar{y} = \\frac{M_{01}}{M_{00}}, \\quad I_0 = I_x + I_y = \\iint_R (x^2+y^2)\\rho\\,dA', note: 'Principal orientation: tan(2 theta) = 2 mu_11 / (mu_20 - mu_02)' }
      ],
      examInsights: [
        {
          title: 'Standard Range of Spherical & Polar Angles (Exam Insight)',
          desc: '1. Full Disk / Full revolution around z-axis: $\\theta \\in [0, 2\\pi]$.\n2. First Quadrant / First Octant ($x \\ge 0, y \\ge 0, z \\ge 0$): $\\theta \\in [0, \\pi/2]$ and $\\phi \\in [0, \\pi/2]$.\n3. Full Sphere in Spherical: $\\rho \\in [0, R], \\phi \\in [0, \\pi]$ (polar angle from positive z-axis, NEVER $2\\pi$!), and $\\theta \\in [0, 2\\pi]$.\n4. Upper Hemisphere ($z \\ge 0$): $\\rho \\in [0, R], \\phi \\in [0, \\pi/2], \\theta \\in [0, 2\\pi]$.'
        },
        {
          title: 'How to Change Order of Integration in 3 Steps',
          desc: '1. Extract bounding curves from given limits (vertical strips $dy\\,dx$ vs horizontal strips $dx\\,dy$).\n2. Sketch the region $R$ and switch strip orientation.\n3. Read off new limits: outer limits must ALWAYS be constants; inner limits are functions of outer variable. If boundary curve formula changes midway, split into two integrals!'
        }
      ],
      topics: [
        {
          id: 't2-1',
          title: 'Topic 1 & 2: Double Integrals & Change of Order of Integration',
          theory: 'Even though some syllabi start at Topic 3, VIT FAT papers regularly pair Polar conversion with Change of Order of Integration because inner integrals like $\\int e^{x^2} dx, \\int e^{y^2} dy, \\int \\sqrt{x^4+1} dx$ cannot be integrated in elementary closed form.'
        },
        {
          id: 't2-2',
          title: 'Topic 3: Change of Variables Between Cartesian and Polar Coordinates',
          theory: 'Substitute $x = r\\cos\\theta, y = r\\sin\\theta, x^2+y^2=r^2$. The area scaling factor is the Jacobian:\n$$J = \\begin{vmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{vmatrix} = r(\\cos^2\\theta + \\sin^2\\theta) = r$$\nHence $dx\\,dy = r\\,dr\\,d\\theta$.\nStandard polar curves to recognize instantly:\n- Circle centered at origin: $x^2+y^2=a^2 \\iff r = a$.\n- Circle through origin centered at $(a, 0)$: $x^2+y^2=2ax \\iff r = 2a\\cos\\theta$ ($\\theta \\in [-\\pi/2, \\pi/2]$).\n- Circle through origin centered at $(0, a)$: $x^2+y^2=2ay \\iff r = 2a\\sin\\theta$ ($\\theta \\in [0, \\pi]$).'
        },
        {
          id: 't2-3',
          title: 'Topic 4 & 5: Evaluation of Triple Integrals & Volumes of 3D Solids',
          theory: 'Volume of region $T$ is given by $V = \\iiint_T 1\\,dV$.\nIf the question specifically states "Use a triple integral to find the volume...", you MUST write the explicit triple integral $\\iiint dz\\,dy\\,dx$ (or $\\iiint r\\,dz\\,dr\\,d\\theta$) as your first step and show innermost z-integration explicitly!'
        },
        {
          id: 't2-4',
          title: 'Topic 8 & 9: Change of Variables in Object Recognition & Image Moments',
          theory: 'In continuous 2D image analysis, a grayscale image is modeled as a non-negative density function $\\rho(x, y)$ over a domain $R$:\n- Total Mass / Image Intensity: $M_{00} = \\iint_R \\rho(x, y)\\,dx\\,dy$.\n- First Raw Moments: $M_{10} = \\iint x\\rho(x,y)\\,dA, \\, M_{01} = \\iint y\\rho(x,y)\\,dA$.\n- Centroid (Center of Gravity): $\\bar{x} = \\frac{M_{10}}{M_{00}}, \\, \\bar{y} = \\frac{M_{01}}{M_{00}}$.\n- Moments of Inertia: $I_x = \\iint y^2\\rho\\,dA, \\, I_y = \\iint x^2\\rho\\,dA, \\, I_0 = I_x + I_y$.'
        }
      ],
      pyqs: [
      {
            "id": "bamat-q2-1",
            "exam": "VIT Question Bank Sheet 2 Q1 \u2014 Evaluation of Double Integral",
            "marks": "10 Marks",
            "question": "Evaluate $\\iint_R xy \\, dx \\, dy$ where $R$ is the region in the first quadrant bounded by the parabola $y = x^2$ and the line $y = x$.",
            "solution": "Step 1 (Find Points of Intersection):\nEquating curves: $x^2 = x \\implies x(x - 1) = 0 \\implies x = 0, 1$.\nIntersection points are $(0, 0)$ and $(1, 1)$.\n\nStep 2 (Determine Region Limits):\nUsing vertical strips: for a fixed $x \\in [0, 1]$, $y$ varies from the lower parabola $y = x^2$ to the upper straight line $y = x$.\n$$\\iint_R xy \\, dy \\, dx = \\int_0^1 \\left[ \\int_{x^2}^x xy \\, dy \\right] dx$$\n\nStep 3 (Perform Inner Integration with respect to $y$):\n$$\\int_{x^2}^x xy \\, dy = x \\left[ \\frac{y^2}{2} \\right]_{x^2}^x = \\frac{x}{2} [x^2 - x^4] = \\frac{1}{2} (x^3 - x^5)$$\n\nStep 4 (Perform Outer Integration with respect to $x$):\n$$\\frac{1}{2} \\int_0^1 (x^3 - x^5) dx = \\frac{1}{2} \\left[ \\frac{x^4}{4} - \\frac{x^6}{6} \\right]_0^1 = \\frac{1}{2} \\left( \\frac{1}{4} - \\frac{1}{6} \\right) = \\frac{1}{2} \\left( \\frac{1}{12} \\right) = \\frac{1}{24}$$\nBoxed Answer: $\\frac{1}{24}$."
      },
      {
            "id": "bamat-q2-2",
            "exam": "VIT Question Bank Sheet 2 Q4 & FAT Nov 2024 Slot A1",
            "marks": "10 Marks",
            "question": "Change the order of integration and hence evaluate: $I = \\int_0^a \\int_{\\frac{x^2}{a}}^{2a - x} xy \\, dy \\, dx$.",
            "solution": "Step 1 (Identify Given Region Boundaries):\nGiven limits: Inner $y$ goes from $y = x^2/a$ (parabola $x^2 = ay$) to $y = 2a - x$ (straight line $x + y = 2a$).\nOuter $x$ goes from $x = 0$ to $x = a$.\nAt $x = 0$: $y = 0$ on parabola, $y = 2a$ on line.\nAt $x = a$: $y = a^2/a = a$ on parabola, $y = 2a - a = a$ on line (they intersect at $(a, a)$).\n\nStep 2 (Split Region for Horizontal Strips):\nExamining horizontal strips $dx \\, dy$, the region splits into two parts at $y = a$:\n- Region $R_1$ ($0 \\le y \\le a$): $x$ goes from line $x = 0$ to parabola $x = \\sqrt{ay}$.\n- Region $R_2$ ($a \\le y \\le 2a$): $x$ goes from line $x = 0$ to straight line $x = 2a - y$.\n$$I = \\int_0^a \\int_0^{\\sqrt{ay}} xy \\, dx \\, dy + \\int_a^{2a} \\int_0^{2a-y} xy \\, dx \\, dy$$\n\nStep 3 (Evaluate $R_1$):\n$$\\int_0^a y \\left[ \\frac{x^2}{2} \\right]_0^{\\sqrt{ay}} dy = \\frac{1}{2} \\int_0^a y(ay) dy = \\frac{a}{2} \\left[ \\frac{y^3}{3} \\right]_0^a = \\frac{a^4}{6}$$\n\nStep 4 (Evaluate $R_2$):\n$$\\int_a^{2a} y \\left[ \\frac{x^2}{2} \\right]_0^{2a-y} dy = \\frac{1}{2} \\int_a^{2a} y(2a-y)^2 dy = \\frac{1}{2} \\int_a^{2a} (4a^2 y - 4a y^2 + y^3) dy$$\n$$= \\frac{1}{2} \\left[ 2a^2(4a^2 - a^2) - \\frac{4a}{3}(8a^3 - a^3) + \\frac{1}{4}(16a^4 - a^4) \\right] = \\frac{1}{2} \\left[ 6a^4 - \\frac{28}{3}a^4 + \\frac{15}{4}a^4 \\right] = \\frac{5a^4}{24}$$\n\nStep 5 (Combine):\n$$I = \\frac{a^4}{6} + \\frac{5a^4}{24} = \\frac{9a^4}{24} = \\frac{3a^4}{8}$$\nBoxed Answer: $\\frac{3a^4}{8}$."
      },
      {
            "id": "bamat-q2-3",
            "exam": "VIT Question Bank Sheet 2 Q8 \u2014 Non-Elementary Exponential Integral",
            "marks": "10 Marks",
            "question": "Evaluate $\\int_0^\\infty \\int_x^\\infty \\frac{e^{-y}}{y} \\, dy \\, dx$ by changing the order of integration.",
            "solution": "Step 1 (Analyze Given Region of Integration):\nGiven limits: Inner $y$ goes from $y = x$ to $y = \\infty$. Outer $x$ goes from $x = 0$ to $x = \\infty$.\nThis represents the infinite triangular wedge bounded by $y = x$, $x = 0$, and extending towards $+\\infty$.\n\nStep 2 (Reverse Order to Horizontal Strips):\nFor a fixed $y \\in [0, \\infty)$, $x$ varies from the vertical axis $x = 0$ to the line $x = y$:\n$$I = \\int_0^\\infty \\left[ \\int_0^y \\frac{e^{-y}}{y} \\, dx \\right] dy$$\n\nStep 3 (Evaluate Inner Integral):\n$$\\int_0^y \\frac{e^{-y}}{y} \\, dx = \\frac{e^{-y}}{y} [x]_0^y = \\frac{e^{-y}}{y} (y - 0) = e^{-y}$$\nRemarkably, the non-integrable denominator $y$ is completely cancelled out!\n\nStep 4 (Evaluate Outer Integral):\n$$I = \\int_0^\\infty e^{-y} \\, dy = [-e^{-y}]_0^\\infty = 0 - (-1) = 1$$\nBoxed Answer: $1$."
      },
      {
            "id": "bamat-q2-4",
            "exam": "VIT Question Bank Sheet 2 Q11 & FAT April 2025 Slot B1",
            "marks": "10 Marks",
            "question": "Transform to polar coordinates and evaluate: $I = \\int_0^a \\int_0^{\\sqrt{a^2 - x^2}} \\sqrt{a^2 - x^2 - y^2} \\, dy \\, dx$.",
            "solution": "Step 1 (Identify Cartesian Region):\n$y$ goes from $0$ to $\\sqrt{a^2 - x^2} \\implies x^2 + y^2 = a^2$. $x$ goes from $0$ to $a$.\nThis is the entire first quadrant of the circular disk of radius $a$.\n\nStep 2 (Set Polar Limits & Substitution):\n- $x = r\\cos\\theta, y = r\\sin\\theta \\implies x^2 + y^2 = r^2$.\n- $dx \\, dy = r \\, dr \\, d\\theta$.\n- $\\sqrt{a^2 - x^2 - y^2} = \\sqrt{a^2 - r^2}$.\n- Limits: $r \\in [0, a]$ and $\\theta \\in [0, \\pi/2]$.\n\nStep 3 (Set up Polar Double Integral):\n$$I = \\int_0^{\\pi/2} \\int_0^a \\sqrt{a^2 - r^2} \\cdot r \\, dr \\, d\\theta$$\n\nStep 4 (Evaluate Inner $r$-Integral):\nLet $u = a^2 - r^2 \\implies du = -2r \\, dr \\implies r \\, dr = -\\frac{du}{2}$.\nWhen $r = 0, u = a^2$; when $r = a, u = 0$.\n$$\\int_{a^2}^0 u^{1/2} \\left(-\\frac{du}{2}\\right) = \\frac{1}{2} \\int_0^{a^2} u^{1/2} du = \\frac{1}{2} \\left[ \\frac{2}{3} u^{3/2} \\right]_0^{a^2} = \\frac{1}{3} a^3$$\n\nStep 5 (Evaluate Outer $\\theta$-Integral):\n$$I = \\int_0^{\\pi/2} \\frac{1}{3} a^3 \\, d\\theta = \\frac{1}{3} a^3 [\\theta]_0^{\\pi/2} = \\frac{\\pi a^3}{6}$$\nBoxed Answer: $\\frac{\\pi a^3}{6}$."
      },
      {
            "id": "bamat-q2-5",
            "exam": "VIT Question Bank Sheet 2 Q14 \u2014 Polar Area of Lemniscate",
            "marks": "8 Marks",
            "question": "Find the total area enclosed by the lemniscate $r^2 = a^2 \\cos(2\\theta)$ using double integration.",
            "solution": "Step 1 (Symmetry and Angle Range):\nThe lemniscate consists of two symmetrical loops. For the right loop, $\\cos(2\\theta) \\ge 0$, which gives $2\\theta \\in [-\\pi/2, \\pi/2] \\implies \\theta \\in [-\\pi/4, \\pi/4]$.\nBy four-fold symmetry across the axes:\n$$\\text{Total Area } A = 4 \\int_0^{\\pi/4} \\int_0^{a\\sqrt{\\cos 2\\theta}} r \\, dr \\, d\\theta$$\n\nStep 2 (Integrate with respect to $r$):\n$$\\int_0^{a\\sqrt{\\cos 2\\theta}} r \\, dr = \\left[ \\frac{r^2}{2} \\right]_0^{a\\sqrt{\\cos 2\\theta}} = \\frac{a^2 \\cos 2\\theta}{2}$$\n\nStep 3 (Integrate with respect to $\\theta$):\n$$A = 4 \\int_0^{\\pi/4} \\frac{a^2 \\cos 2\\theta}{2} d\\theta = 2a^2 \\left[ \\frac{\\sin 2\\theta}{2} \\right]_0^{\\pi/4} = a^2 [\\sin(\\pi/2) - 0] = a^2$$\nBoxed Answer: $a^2$."
      },
      {
            "id": "bamat-q2-6",
            "exam": "VIT Question Bank Sheet 2 Q18 \u2014 Triple Integral in Cartesian",
            "marks": "10 Marks",
            "question": "Evaluate $\\iiint_V xyz \\, dx \\, dy \\, dz$ over the first octant of the tetrahedron bounded by $x = 0, y = 0, z = 0$ and the plane $x + y + z = 1$.",
            "solution": "Step 1 (Determine 3D Limits):\n- $z$ goes from $0$ to $1 - x - y$.\n- In the $xy$-plane ($z = 0$), $x + y = 1 \\implies y$ goes from $0$ to $1 - x$.\n- $x$ goes from $0$ to $1$.\n$$I = \\int_0^1 x \\left[ \\int_0^{1-x} y \\left[ \\int_0^{1-x-y} z \\, dz \\right] dy \\right] dx$$\n\nStep 2 (Inner $z$-Integration):\n$$\\int_0^{1-x-y} z \\, dz = \\frac{(1 - x - y)^2}{2}$$\n\nStep 3 (Middle $y$-Integration):\nLet $u = 1 - x - y \\implies y = (1-x) - u, dy = -du$.\n$$\\frac{1}{2} \\int_0^{1-x} y (1-x-y)^2 dy = \\frac{1}{2} \\int_0^{1-x} [(1-x) - u] u^2 du = \\frac{1}{2} \\left[ (1-x)\\frac{(1-x)^3}{3} - \\frac{(1-x)^4}{4} \\right] = \\frac{(1-x)^4}{24}$$\n\nStep 4 (Outer $x$-Integration):\n$$I = \\frac{1}{24} \\int_0^1 x(1-x)^4 dx$$\nUsing substitution $1 - x = t \\implies x = 1 - t, dx = -dt$:\n$$= \\frac{1}{24} \\int_0^1 (1-t)t^4 dt = \\frac{1}{24} \\left( \\frac{1}{5} - \\frac{1}{6} \\right) = \\frac{1}{24} \\times \\frac{1}{30} = \\frac{1}{720}$$\nBoxed Answer: $\\frac{1}{720}$."
      },
      {
            "id": "bamat-q2-7",
            "exam": "VIT Question Bank Sheet 2 Q22 \u2014 Cylindrical Coordinates",
            "marks": "10 Marks",
            "question": "Evaluate $\\iiint_V (x^2 + y^2) \\, dx \\, dy \\, dz$ where $V$ is the region of the cylinder $x^2 + y^2 \\le a^2$ bounded by the planes $z = 0$ and $z = h$.",
            "solution": "Step 1 (Convert to Cylindrical Coordinates):\n- $x = r\\cos\\theta, y = r\\sin\\theta, z = z \\implies x^2 + y^2 = r^2$.\n- Volume element: $dV = r \\, dz \\, dr \\, d\\theta$.\n- Integrand: $(x^2 + y^2) dV = r^2 (r \\, dz \\, dr \\, d\\theta) = r^3 \\, dz \\, dr \\, d\\theta$.\n\nStep 2 (Cylindrical Limits):\n$z \\in [0, h], \\quad r \\in [0, a], \\quad \\theta \\in [0, 2\\pi]$.\n\nStep 3 (Evaluate Triple Integral):\n$$I = \\int_0^{2\\pi} d\\theta \\int_0^a r^3 dr \\int_0^h dz = (2\\pi) \\cdot \\left[ \\frac{r^4}{4} \\right]_0^a \\cdot [z]_0^h = 2\\pi \\cdot \\frac{a^4}{4} \\cdot h = \\frac{\\pi a^4 h}{2}$$\nBoxed Answer: $\\frac{\\pi a^4 h}{2}$."
      },
      {
            "id": "bamat-q2-8",
            "exam": "VIT Question Bank Sheet 2 Q25 \u2014 Spherical Coordinates Gravitational Integral",
            "marks": "10 Marks",
            "question": "Evaluate $\\iiint_V \\frac{1}{\\sqrt{x^2 + y^2 + z^2}} \\, dx \\, dy \\, dz$ over the solid sphere $x^2 + y^2 + z^2 \\le a^2$.",
            "solution": "Step 1 (Convert to Spherical Coordinates):\n- $x^2 + y^2 + z^2 = \\rho^2 \\implies \\sqrt{x^2+y^2+z^2} = \\rho$.\n- Volume element: $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.\n- Integrand: $\\frac{1}{\\rho} \\cdot \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta = \\rho \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.\n\nStep 2 (Spherical Coordinate Limits for Full Sphere):\n$\\rho \\in [0, a], \\quad \\phi \\in [0, \\pi], \\quad \\theta \\in [0, 2\\pi]$.\n\nStep 3 (Perform Triple Integration):\n$$I = \\left( \\int_0^{2\\pi} d\\theta \\right) \\left( \\int_0^\\pi \\sin\\phi \\, d\\phi \\right) \\left( \\int_0^a \\rho \\, d\\rho \\right)$$\n- $\\int_0^{2\\pi} d\\theta = 2\\pi$.\n- $\\int_0^\\pi \\sin\\phi \\, d\\phi = [-\\cos\\phi]_0^\\pi = -(-1 - 1) = 2$.\n- $\\int_0^a \\rho \\, d\\rho = \\left[ \\frac{\\rho^2}{2} \\right]_0^a = \\frac{a^2}{2}$.\n\nStep 4 (Combine):\n$$I = 2\\pi \\times 2 \\times \\frac{a^2}{2} = 2\\pi a^2$$\nBoxed Answer: $2\\pi a^2$."
      },
      {
            "id": "bamat-q2-9",
            "exam": "VIT Question Bank Sheet 2 Q28 \u2014 Paraboloid Volume by Triple Integral",
            "marks": "10 Marks",
            "question": "Find the volume of the region bounded below by the paraboloid $z = x^2 + y^2$ and above by the plane $z = 4$ using triple integration.",
            "solution": "Step 1 (Intersection Curve & Cylindrical Setup):\nAt intersection: $x^2 + y^2 = 4 \\implies$ circular disk of radius $r = 2$.\nIn cylindrical coordinates:\n- $z$ goes from lower paraboloid $z = r^2$ to upper flat cap $z = 4$.\n- $r$ goes from $0$ to $2$.\n- $\\theta$ goes from $0$ to $2\\pi$.\n$$V = \\int_0^{2\\pi} \\int_0^2 \\int_{r^2}^4 r \\, dz \\, dr \\, d\\theta$$\n\nStep 2 (Integrate with respect to $z$):\n$$\\int_{r^2}^4 dz = [z]_{r^2}^4 = 4 - r^2$$\n\nStep 3 (Integrate with respect to $r$):\n$$\\int_0^2 r(4 - r^2) dr = \\int_0^2 (4r - r^3) dr = \\left[ 2r^2 - \\frac{r^4}{4} \\right]_0^2 = 2(4) - \\frac{16}{4} = 8 - 4 = 4$$\n\nStep 4 (Integrate with respect to $\\theta$):\n$$V = \\int_0^{2\\pi} 4 \\, d\\theta = 4(2\\pi) = 8\\pi$$\nBoxed Answer: $8\\pi$."
      },
      {
            "id": "bamat-q2-10",
            "exam": "VIT Question Bank Sheet 2 Q32 \u2014 Image Analysis / Centroid of Lamina",
            "marks": "10 Marks",
            "question": "Find the coordinates of the centroid $(\\bar{x}, \\bar{y})$ of the uniform parabolic lamina bounded by $y^2 = 4ax$ and its latus rectum $x = a$.",
            "solution": "Step 1 (Total Mass $M_{00}$):\nBy symmetry across the $x$-axis, $\\bar{y} = 0$.\nLimits: $x \\in [0, a]$, and for each $x$, $y \\in [-2\\sqrt{ax}, 2\\sqrt{ax}]$.\n$$M_{00} = \\rho_0 \\int_0^a \\int_{-2\\sqrt{ax}}^{2\\sqrt{ax}} dy \\, dx = 2\\rho_0 \\int_0^a 2\\sqrt{a} x^{1/2} dx = 4\\rho_0 \\sqrt{a} \\left[ \\frac{2}{3} x^{3/2} \\right]_0^a = \\frac{8}{3} \\rho_0 a^2$$\n\nStep 2 (First Moment with respect to $y$-axis $M_{10}$):\n$$M_{10} = \\rho_0 \\int_0^a x \\left[ \\int_{-2\\sqrt{ax}}^{2\\sqrt{ax}} dy \\right] dx = 4\\rho_0 \\sqrt{a} \\int_0^a x^{3/2} dx = 4\\rho_0 \\sqrt{a} \\left[ \\frac{2}{5} x^{5/2} \\right]_0^a = \\frac{8}{5} \\rho_0 a^3$$\n\nStep 3 (Compute Centroid Coordinate $\\bar{x}$):\n$$\\bar{x} = \\frac{M_{10}}{M_{00}} = \\frac{\\frac{8}{5} \\rho_0 a^3}{\\frac{8}{3} \\rho_0 a^2} = \\frac{3}{5} a$$\nBoxed Answer: Centroid $(\\bar{x}, \\bar{y}) = \\left(\\frac{3}{5}a, 0\\right)$."
      }
]
    },
    {
      id: 'bamat-m3',
      moduleNum: 3,
      pdfUrl: '/pdfs/calculus/Math_MOD-3.pdf',
      title: 'Vector Differentiation and Integration (CO: 3)',
      co: 'CO: 3',
      examScope: 'CAT-2 & FAT',
      weightage: '25-30 Marks in FAT (Highest Weighted Module)',
      status: 'not_confident',
      scope: 'Scalar and vector valued functions—gradient, Directional derivative, divergence and curl, Scalar and vector potentials, Line integral and problems, Surface integral–volume integral and problems, Statement of Green\'s theorem and problems, Statement of Stokes\' theorem and problems, Statement of Gauss divergence theorem and problems, Vector derivatives for electromagnetic simulation in CAD, Vector integrals in antenna design.',
      blueprint: {
        marksTotal: '20 to 30 Marks across two or three 10-mark questions in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Vector Differentiation & Scalar Potential: Directional derivative maximum values, angle between level surfaces, finding constants $a, b, c$ such that $\\vec{F}$ is irrotational ($\\nabla \\times \\vec{F} = \\vec{0}$) and integrating for scalar potential $\\phi$.' },
          { type: 'Question Type B (10 Marks)', desc: 'Verification of Green\'s Theorem in the Plane or Stokes\' Theorem: Evaluating LHS line integral along closed boundary and RHS surface integral independently, showing LHS = RHS (5M for LHS + 5M for RHS).' },
          { type: 'Question Type C (10 Marks)', desc: 'Verification of Gauss Divergence Theorem: Calculating outward flux through all 6 faces of a rectangular parallelepiped $0\\le x\\le a, 0\\le y\\le b, 0\\le z\\le c$ and proving equality with triple integral $\\iiint (\\nabla\\cdot\\vec{F}) dV$.' }
        ]
      },
      formulaSheet: [
        { name: 'Gradient', formula: '\\nabla\\phi = \\frac{\\partial\\phi}{\\partial x}\\hat{i} + \\frac{\\partial\\phi}{\\partial y}\\hat{j} + \\frac{\\partial\\phi}{\\partial z}\\hat{k}', note: 'Points along maximum increase; unit normal \\hat{n} = \\frac{\\nabla\\phi}{|\\nabla\\phi|}' },
        { name: 'Directional Derivative', formula: 'D_{\\vec{a}}\\phi = \\nabla\\phi \\cdot \\frac{\\vec{a}}{|\\vec{a}|}', note: 'Maximum rate of change is |\\nabla\\phi|' },
        { name: 'Divergence & Solenoidal Condition', formula: '\\nabla \\cdot \\vec{F} = \\frac{\\partial F_1}{\\partial x} + \\frac{\\partial F_2}{\\partial y} + \\frac{\\partial F_3}{\\partial z} = 0', note: 'If div F = 0, field is solenoidal (incompressible)' },
        { name: 'Curl & Irrotational Condition', formula: '\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ F_1 & F_2 & F_3 \\end{vmatrix} = \\vec{0}', note: 'If curl F = 0, field is conservative and F = \\nabla\\phi' },
        { name: 'Green\'s Theorem in the Plane', formula: '\\oint_C (M\\,dx + N\\,dy) = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dx\\,dy', note: 'Relates 2D counterclockwise loop to enclosed planar area' },
        { name: 'Stokes\' Theorem', formula: '\\oint_C \\vec{F} \\cdot d\\vec{r} = \\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n}\\,dS', note: 'Relates 3D boundary curve C to open surface S' },
        { name: 'Gauss Divergence Theorem', formula: '\\iint_S \\vec{F} \\cdot \\hat{n}\\,dS = \\iiint_V (\\nabla \\cdot \\vec{F})\\,dV', note: 'Outward flux through closed surface S equals triple integral over enclosed volume V' }
      ],
      examInsights: [
        {
          title: '"Verify" vs "Evaluate" in VIT FAT Papers (FAT Insight)',
          desc: '• If the question says "Evaluate using Green\'s / Stokes\' / Gauss Divergence Theorem", you ONLY compute the easier side (usually the RHS double/triple integral) for full 10 marks!\n• If the question says "Verify Green\'s / Stokes\' / Gauss Divergence Theorem", you MUST evaluate BOTH the LHS and RHS independently and show that LHS = RHS (5 marks for LHS + 5 marks for RHS).'
        },
        {
          title: 'Projecting Surface Integrals Onto Coordinate Planes',
          desc: 'To evaluate flux $\\iint_S \\vec{F}\\cdot\\hat{n}\\,dS$:\n- Projection onto xy-plane: $dS = \\frac{dx\\,dy}{|\\hat{n}\\cdot\\hat{k}|}$.\n- Projection onto xz-plane: $dS = \\frac{dx\\,dz}{|\\hat{n}\\cdot\\hat{j}|}$ (CRITICAL for vertical cylinders $x^2+y^2=a^2$, where $\\hat{n}\\cdot\\hat{k} = 0$!).'
        }
      ],
      topics: [
        {
          id: 't3-1',
          title: 'Topic 1: Scalar and Vector Valued Functions — Gradient',
          theory: 'Let $\\phi(x, y, z)$ be a differentiable scalar field. The vector differential operator is $\\nabla = \\hat{i}\\partial_x + \\hat{j}\\partial_y + \\hat{k}\\partial_z$.\n- Unit normal to level surface $\\phi(x, y, z) = c$: $\\hat{n} = \\frac{\\nabla\\phi}{|\\nabla\\phi|}$.\n- Tangent plane equation at $P(x_0, y_0, z_0)$: $(x - x_0)\\phi_x + (y - y_0)\\phi_y + (z - z_0)\\phi_z = 0$.\n- Angle $\\theta$ between surfaces $\\phi_1$ and $\\phi_2$: $\\cos\\theta = \\frac{\\nabla\\phi_1 \\cdot \\nabla\\phi_2}{|\\nabla\\phi_1| |\\nabla\\phi_2|}$. Surfaces are orthogonal if $\\nabla\\phi_1 \\cdot \\nabla\\phi_2 = 0$.'
        },
        {
          id: 't3-2',
          title: 'Topic 3: Conservative Fields & Finding the Scalar Potential phi',
          theory: 'A vector field $\\vec{F}$ is conservative iff $\\nabla \\times \\vec{F} = \\vec{0}$, which guarantees $\\vec{F} = \\nabla\\phi$.\nFastest Exam Method to Find $\\phi(x, y, z)$ (No Mistakes Guaranteed):\nIntegrate each partial derivative with respect to its variable, and keep each distinct term only once:\n$$\\phi(x, y, z) = \\int F_1 dx \\cup \\int F_2 dy \\cup \\int F_3 dz + C$$'
        },
        {
          id: 't3-3',
          title: 'Topic 6, 7 & 8: The Fundamental Theorems (Green, Stokes, Gauss)',
          theory: 'These theorems connect dimensions:\n- Green\'s Theorem: 1D boundary line integral $\\leftrightarrow$ 2D area double integral.\n- Stokes\' Theorem: 1D space loop line integral $\\leftrightarrow$ 2D open surface flux of curl.\n- Gauss Divergence Theorem: 2D closed boundary surface flux $\\leftrightarrow$ 3D enclosed volume integral of divergence.'
        },
        {
          id: 't3-4',
          title: 'Topic 9 & 10: Maxwell\'s Equations CAD Simulation & Antenna Radiation',
          theory: 'Modern 3D EM simulation packages (ANSYS HFSS, CST Studio) solve Maxwell\'s equations:\n- Gauss\'s Law: $\\nabla \\cdot \\vec{D} = \\rho_v \\iff \\iint \\vec{D}\\cdot\\hat{n}\\,dS = \\iiint \\rho_v dV$.\n- Faraday\'s Law: $\\nabla \\times \\vec{E} = -\\frac{\\partial\\vec{B}}{\\partial t} \\iff \\oint \\vec{E}\\cdot d\\vec{r} = -\\frac{d}{dt}\\iint \\vec{B}\\cdot\\hat{n}\\,dS$.\n- Total Antenna Radiated Power via Poynting Flux: $P_{\\text{rad}} = \\iint_S \\vec{S}_{\\text{avg}} \\cdot \\hat{n}\\,dS$.'
        }
      ],
      pyqs: [
      {
            "id": "bamat-q3-1",
            "exam": "BMAT101L FAT Paper / VIT Question Bank Q8",
            "marks": "10 Marks",
            "question": "Find the constants $a, b, c$ such that the vector field $\\vec{F} = (x + 2y + az)\\hat{i} + (bx - 3y - z)\\hat{j} + (4x + cy + 2z)\\hat{k}$ is irrotational. Hence find its scalar potential $\\phi$.",
            "solution": "Step 1 (Irrotational condition $\\nabla \\times \\vec{F} = \\vec{0}$):\n$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ x+2y+az & bx-3y-z & 4x+cy+2z \\end{vmatrix} = (c - (-1))\\hat{i} - (4 - a)\\hat{j} + (b - 2)\\hat{k} = \\vec{0}$$\nSetting each component to zero:\n$$c + 1 = 0 \\implies c = -1, \\quad 4 - a = 0 \\implies a = 4, \\quad b - 2 = 0 \\implies b = 2$$\n\nStep 2 (Find scalar potential $\\phi$):\nSubstituting $a=4, b=2, c=-1$, we have $\\vec{F} = (x + 2y + 4z)\\hat{i} + (2x - 3y - z)\\hat{j} + (4x - y + 2z)\\hat{k}$:\n$$\\int F_1 dx = \\int (x + 2y + 4z) dx = \\frac{x^2}{2} + 2xy + 4xz$$\n$$\\int F_2 dy = \\int (2x - 3y - z) dy = 2xy - \\frac{3y^2}{2} - yz$$\n$$\\int F_3 dz = \\int (4x - y + 2z) dz = 4xz - yz + z^2$$\n\nCombining each distinct term once:\n$$\\phi(x, y, z) = \\frac{x^2}{2} - \\frac{3y^2}{2} + z^2 + 2xy - yz + 4xz + C$$\nBoxed Answer: $a = 4, b = 2, c = -1$, and $\\phi = \\frac{x^2}{2} - \\frac{3y^2}{2} + z^2 + 2xy - yz + 4xz + C$."
      },
      {
            "id": "bamat-q3-2",
            "exam": "VIT Question Bank Sheet 3 Q3 \u2014 Directional Derivative along a Vector",
            "marks": "8 Marks",
            "question": "Find the directional derivative of $\\phi(x, y, z) = xy^2 + yz^3$ at the point $P(2, -1, 1)$ in the direction of the vector $\\vec{a} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$.",
            "solution": "Step 1 (Compute Gradient $\\nabla\\phi$):\n$$\\nabla\\phi = \\frac{\\partial\\phi}{\\partial x}\\hat{i} + \\frac{\\partial\\phi}{\\partial y}\\hat{j} + \\frac{\\partial\\phi}{\\partial z}\\hat{k} = (y^2)\\hat{i} + (2xy + z^3)\\hat{j} + (3yz^2)\\hat{k}$$\nAt point $P(2, -1, 1)$:\n$$\\nabla\\phi(2, -1, 1) = ((-1)^2)\\hat{i} + (2(2)(-1) + 1^3)\\hat{j} + (3(-1)(1^2))\\hat{k} = \\hat{i} - 3\\hat{j} - 3\\hat{k}$$\n\nStep 2 (Find Unit Vector $\\hat{a}$):\n$$|\\vec{a}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{1 + 4 + 4} = 3$$\n$$\\hat{a} = \\frac{\\vec{a}}{|\\vec{a}|} = \\frac{\\hat{i} + 2\\hat{j} + 2\\hat{k}}{3}$$\n\nStep 3 (Calculate Directional Derivative):\n$$D_{\\vec{a}}\\phi = \\nabla\\phi \\cdot \\hat{a} = (\\hat{i} - 3\\hat{j} - 3\\hat{k}) \\cdot \\left(\\frac{\\hat{i} + 2\\hat{j} + 2\\hat{k}}{3}\\right) = \\frac{1(1) + (-3)(2) + (-3)(2)}{3} = \\frac{1 - 6 - 6}{3} = -\\frac{11}{3}$$\nBoxed Answer: $-\\frac{11}{3}$."
      },
      {
            "id": "bamat-q3-3",
            "exam": "VIT Question Bank Sheet 3 Q6 \u2014 Angle of Intersection of Surfaces",
            "marks": "8 Marks",
            "question": "Find the angle of intersection between the two surfaces $x^2 + y^2 + z^2 = 9$ and $z = x^2 + y^2 - 3$ at the point $(2, -1, 2)$.",
            "solution": "Step 1 (Find Normal to First Surface $f(x, y, z) = x^2 + y^2 + z^2 - 9 = 0$):\n$$\\vec{n}_1 = \\nabla f = 2x\\hat{i} + 2y\\hat{j} + 2z\\hat{k}$$\nAt point $(2, -1, 2)$:\n$$\\vec{n}_1 = 4\\hat{i} - 2\\hat{j} + 4\\hat{k}, \\quad |\\vec{n}_1| = \\sqrt{16 + 4 + 16} = 6$$\n\nStep 2 (Find Normal to Second Surface $g(x, y, z) = x^2 + y^2 - z - 3 = 0$):\n$$\\vec{n}_2 = \\nabla g = 2x\\hat{i} + 2y\\hat{j} - \\hat{k}$$\nAt point $(2, -1, 2)$:\n$$\\vec{n}_2 = 4\\hat{i} - 2\\hat{j} - \\hat{k}, \\quad |\\vec{n}_2| = \\sqrt{16 + 4 + 1} = \\sqrt{21}$$\n\nStep 3 (Calculate Angle $\\theta$ via Dot Product):\n$$\\vec{n}_1 \\cdot \\vec{n}_2 = (4)(4) + (-2)(-2) + (4)(-1) = 16 + 4 - 4 = 16$$\n$$\\cos\\theta = \\frac{\\vec{n}_1 \\cdot \\vec{n}_2}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{16}{6\\sqrt{21}} = \\frac{8}{3\\sqrt{21}}$$\n$$\\theta = \\cos^{-1}\\left(\\frac{8}{3\\sqrt{21}}\\right)$$\nBoxed Answer: $\\theta = \\cos^{-1}\\left(\\frac{8}{3\\sqrt{21}}\\right)$."
      },
      {
            "id": "bamat-q3-4",
            "exam": "VIT Question Bank Sheet 3 Q9 \u2014 Solenoidal Vector Field",
            "marks": "6 Marks",
            "question": "Determine the constant $a$ such that the vector field $\\vec{V} = (x + 3y)\\hat{i} + (y - 2z)\\hat{j} + (x + az)\\hat{k}$ is solenoidal.",
            "solution": "Step 1 (Apply Solenoidal Condition $\\nabla \\cdot \\vec{V} = 0$):\n$$\\nabla \\cdot \\vec{V} = \\frac{\\partial}{\\partial x}(x + 3y) + \\frac{\\partial}{\\partial y}(y - 2z) + \\frac{\\partial}{\\partial z}(x + az) = 0$$\n$$1 + 1 + a = 0 \\implies 2 + a = 0 \\implies a = -2$$\nBoxed Answer: $a = -2$."
      },
      {
            "id": "bamat-q3-5",
            "exam": "VIT Question Bank Sheet 3 Q12 \u2014 Line Integral along Path",
            "marks": "8 Marks",
            "question": "Evaluate $\\int_C \\vec{F} \\cdot d\\vec{r}$ where $\\vec{F} = (3x^2 + 6y)\\hat{i} - 14yz\\hat{j} + 20xz^2\\hat{k}$ along the straight line from $(0, 0, 0)$ to $(1, 1, 1)$.",
            "solution": "Step 1 (Parametrize the Straight Line Path):\nLine segment from $(0, 0, 0)$ to $(1, 1, 1)$ is parametrized by:\n$$x = t, \\quad y = t, \\quad z = t, \\quad t \\in [0, 1]$$\n$$dx = dt, \\quad dy = dt, \\quad dz = dt$$\n\nStep 2 (Substitute Parametrization into Vector Field):\n- $F_1 = 3t^2 + 6t$\n- $F_2 = -14(t)(t) = -14t^2$\n- $F_3 = 20(t)(t^2) = 20t^3$\n\nStep 3 (Form Dot Product & Integrate):\n$$\\int_C \\vec{F} \\cdot d\\vec{r} = \\int_0^1 [(3t^2 + 6t) + (-14t^2) + (20t^3)] dt = \\int_0^1 (20t^3 - 11t^2 + 6t) dt$$\n$$= \\left[ 20\\frac{t^4}{4} - 11\\frac{t^3}{3} + 6\\frac{t^2}{2} \\right]_0^1 = 5 - \\frac{11}{3} + 3 = 8 - \\frac{11}{3} = \\frac{13}{3}$$\nBoxed Answer: $\\frac{13}{3}$."
      },
      {
            "id": "bamat-q3-6",
            "exam": "VIT Question Bank Q15 & Tutorial Q5 \u2014 Green's Theorem Verification",
            "marks": "10 Marks",
            "question": "Verify Green's theorem in the plane for $\\oint_C (3x^2 - 8y^2) dx + (4y - 6xy) dy$, where $C$ is the boundary of the triangle formed by $x = 0, y = 0$, and $x + y = 1$.",
            "solution": "Here $M = 3x^2 - 8y^2$ and $N = 4y - 6xy$, so $\\frac{\\partial M}{\\partial y} = -16y$ and $\\frac{\\partial N}{\\partial x} = -6y$.\n\nPart 1 (RHS \u2014 Double Integral over $R$):\n$$\\text{RHS} = \\iint_R \\left(\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}\\right) dx\\,dy = \\int_0^1 \\int_0^{1-x} 10y\\,dy\\,dx = \\int_0^1 5(1 - x)^2 dx = \\frac{5}{3}$$\n\nPart 2 (LHS \u2014 Line Integral along the 3 edges of triangle $O(0, 0) \\to A(1, 0) \\to B(0, 1) \\to O(0, 0)$):\n- Along $OA$ ($y = 0, dy = 0, x: 0 \\to 1$): $\\int_0^1 3x^2 dx = [x^3]_0^1 = 1$.\n- Along $AB$ ($y = 1-x, dy = -dx, x: 1 \\to 0$):\n$$\\int_1^0 [(3x^2 - 8(1-x)^2) - (4(1-x) - 6x(1-x))] dx = \\int_0^1 (11x^2 - 26x + 12) dx = \\left[\\frac{11}{3} - 13 + 12\\right] = \\frac{8}{3}$$\n- Along $BO$ ($x = 0, dx = 0, y: 1 \\to 0$): $\\int_1^0 4y\\,dy = [2y^2]_1^0 = -2$.\n\nSumming the three segments: $\\text{LHS} = 1 + \\frac{8}{3} - 2 = \\frac{5}{3} = \\text{RHS}$. Hence Green's theorem is verified!"
      },
      {
            "id": "bamat-q3-7",
            "exam": "VIT Question Bank Sheet 3 Q18 \u2014 Area of Astroid by Green's Theorem",
            "marks": "8 Marks",
            "question": "Use Green's theorem formula $A = \\frac{1}{2} \\oint_C (x \\, dy - y \\, dx)$ to find the area enclosed by the astroid $x^{2/3} + y^{2/3} = a^{2/3}$.",
            "solution": "Step 1 (Parametric Representation of Astroid):\n$$x = a\\cos^3 t, \\quad y = a\\sin^3 t, \\quad t \\in [0, 2\\pi]$$\n$$dx = -3a\\cos^2 t \\sin t \\, dt, \\quad dy = 3a\\sin^2 t \\cos t \\, dt$$\n\nStep 2 (Evaluate Integrand):\n$$x \\, dy - y \\, dx = (a\\cos^3 t)(3a\\sin^2 t \\cos t) - (a\\sin^3 t)(-3a\\cos^2 t \\sin t)$$\n$$= 3a^2 \\cos^2 t \\sin^2 t (\\cos^2 t + \\sin^2 t) = 3a^2 \\cos^2 t \\sin^2 t = \\frac{3a^2}{4} \\sin^2(2t)$$\n\nStep 3 (Integrate around closed loop):\n$$A = \\frac{1}{2} \\int_0^{2\\pi} \\frac{3a^2}{4} \\sin^2(2t) dt = \\frac{3a^2}{8} \\int_0^{2\\pi} \\left( \\frac{1 - \\cos 4t}{2} \\right) dt = \\frac{3a^2}{16} [2\\pi - 0] = \\frac{3\\pi a^2}{8}$$\nBoxed Answer: $\\frac{3\\pi a^2}{8}$."
      },
      {
            "id": "bamat-q3-8",
            "exam": "VIT Question Bank Sheet 3 Q22 & FAT April 2025 \u2014 Stokes' Theorem Verification",
            "marks": "10 Marks",
            "question": "Verify Stokes' theorem for $\\vec{F} = (2x - y)\\hat{i} - yz^2\\hat{j} - y^2 z\\hat{k}$ over the upper hemisphere $x^2 + y^2 + z^2 = 1, z \\ge 0$, bounded by its projection circle $C$ in the $xy$-plane.",
            "solution": "Step 1 (Boundary Curve $C$ and Line Integral LHS):\nBoundary curve $C$ is the unit circle $x^2 + y^2 = 1$ in the plane $z = 0$.\nParametrization: $x = \\cos t, y = \\sin t, z = 0, t \\in [0, 2\\pi]$.\nSince $z = 0, dz = 0$:\n$$\\vec{F} \\cdot d\\vec{r} = (2x - y)dx + (-0)dy - 0 = (2\\cos t - \\sin t)(-\\sin t) dt = (-2\\sin t \\cos t + \\sin^2 t) dt$$\n$$\\oint_C \\vec{F} \\cdot d\\vec{r} = \\int_0^{2\\pi} (-\\sin 2t + \\sin^2 t) dt = 0 + \\pi = \\pi \\quad (\\text{LHS})$$\n\nStep 2 (Surface Integral RHS \u2014 Compute $\\nabla \\times \\vec{F}$):\n$$\\nabla \\times \\vec{F} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ \\partial_x & \\partial_y & \\partial_z \\\\ 2x-y & -yz^2 & -y^2 z \\end{vmatrix} = (-2yz - (-2yz))\\hat{i} - (0 - 0)\\hat{j} + (0 - (-1))\\hat{k} = \\hat{k}$$\n\nStep 3 (Evaluate Surface Flux):\n$$\\iint_S (\\nabla \\times \\vec{F}) \\cdot \\hat{n} \\, dS = \\iint_S \\hat{k} \\cdot \\hat{n} \\, dS$$\nSince $\\hat{k} \\cdot \\hat{n} \\, dS = dx \\, dy$ (the projection of the hemisphere onto the $xy$-plane):\n$$= \\iint_{x^2+y^2 \\le 1} dx \\, dy = \\text{Area of unit circle} = \\pi (1^2) = \\pi \\quad (\\text{RHS})$$\nLHS = RHS = $\\pi$. Stokes' theorem is verified!"
      },
      {
            "id": "bamat-q3-9",
            "exam": "VIT Tutorial Sheet Q10 \u2014 Full Verification of Divergence Theorem on a Box",
            "marks": "10 Marks",
            "question": "Verify the divergence theorem for $\\vec{F} = (x^2 - yz)\\hat{i} + (y^2 - zx)\\hat{j} + (z^2 - xy)\\hat{k}$ taken over the rectangular parallelepiped $0 \\le x \\le a, 0 \\le y \\le b, 0 \\le z \\le c$.",
            "solution": "Part 1 (RHS \u2014 Volume Integral):\n$$\\nabla \\cdot \\vec{F} = 2x + 2y + 2z = 2(x + y + z)$$\n$$\\text{RHS} = \\int_0^a \\int_0^b \\int_0^c 2(x + y + z)\\,dz\\,dy\\,dx = 2 \\left(\\frac{a^2}{2}bc + a\\frac{b^2}{2}c + ab\\frac{c^2}{2}\\right) = abc(a + b + c)$$\n\nPart 2 (LHS \u2014 Surface Integral over the 6 faces):\n- Pair $x = a$ ($\\hat{n} = \\hat{i}$) and $x = 0$ ($\\hat{n} = -\\hat{i}$):\n$$\\int_0^b \\int_0^c [(a^2 - yz) - (0 - yz)]\\,dz\\,dy = \\int_0^b \\int_0^c a^2\\,dz\\,dy = a^2 bc$$\n- Pair $y = b$ ($\\hat{n} = \\hat{j}$) and $y = 0$ ($\\hat{n} = -\\hat{j}$): By symmetry, $\\int_0^a \\int_0^c b^2\\,dz\\,dx = ab^2 c$.\n- Pair $z = c$ ($\\hat{n} = \\hat{k}$) and $z = 0$ ($\\hat{n} = -\\hat{k}$): By symmetry, $\\int_0^a \\int_0^b c^2\\,dy\\,dx = abc^2$.\n\nSumming all 6 faces: $\\text{LHS} = a^2 bc + ab^2 c + abc^2 = abc(a + b + c) = \\text{RHS}$. Verified!"
      },
      {
            "id": "bamat-q3-10",
            "exam": "VIT Question Bank Sheet 3 Q28 \u2014 Gauss Divergence on Unit Cube",
            "marks": "10 Marks",
            "question": "Evaluate $\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS$ where $\\vec{F} = 4xz\\hat{i} - y^2\\hat{j} + yz\\hat{k}$ and $S$ is the surface of the cube bounded by $x = 0, x = 1, y = 0, y = 1, z = 0, z = 1$ using Gauss divergence theorem.",
            "solution": "Step 1 (Apply Gauss Divergence Theorem):\n$$\\iint_S \\vec{F} \\cdot \\hat{n} \\, dS = \\iiint_V (\\nabla \\cdot \\vec{F}) \\, dV$$\n\nStep 2 (Compute Divergence):\n$$\\nabla \\cdot \\vec{F} = \\frac{\\partial}{\\partial x}(4xz) + \\frac{\\partial}{\\partial y}(-y^2) + \\frac{\\partial}{\\partial z}(yz) = 4z - 2y + y = 4z - y$$\n\nStep 3 (Evaluate Volume Integral over Unit Cube):\n$$\\int_0^1 \\int_0^1 \\int_0^1 (4z - y) \\, dz \\, dy \\, dx = \\int_0^1 dx \\int_0^1 dy \\left[ 2z^2 - yz \\right]_0^1 = (1) \\int_0^1 (2 - y) dy = \\left[ 2y - \\frac{y^2}{2} \\right]_0^1 = 2 - \\frac{1}{2} = \\frac{3}{2}$$\nBoxed Answer: $\\frac{3}{2}$."
      }
]
    },
    {
      id: 'bamat-m4',
      moduleNum: 4,
      pdfUrl: '/pdfs/calculus/Math_MOD-4.pdf',
      title: 'Ordinary Differential Equations (ODEs) (CO: 4)',
      co: 'CO: 4',
      examScope: 'CAT-2 & FAT',
      weightage: '20-30 Marks in FAT',
      status: 'need_to_revise',
      scope: 'Introduction to linear second-order ODEs with constant coefficients, Solutions of ODE by method of undetermined coefficients, Solutions of ODE by method of variation of parameters-1, Solutions of ODE by method of variation of parameters-2, Solution of Cauchy-Euler differential equation, Solution of Cauchy-Legendre differential equations, Steady-state response of input signal in digital signal processing, and Differential equations for LCR circuit simulation.',
      blueprint: {
        marksTotal: '20 to 30 Marks across two or three 10-mark questions in FAT',
        questionTypes: [
          { type: 'Question Type A (10 Marks)', desc: 'Solving a constant-coefficient ODE $(aD^2 + bD + c)y = R(x)$ by the Method of Undetermined Coefficients (especially when $R(x) = e^{ax}\\cos bx, x^n e^{ax}$, or when Duplication Rule $x^s$ is triggered).' },
          { type: 'Question Type B (10 Marks)', desc: 'Solving trigonometric ODE like $(D^2+a^2)y = \\tan ax, \\sec ax$ or variable coefficient Cauchy-Euler ODE like $(x^2 D^2 - 4xD + 6)y = \\sin(\\ln x)$ using Method of Variation of Parameters.' },
          { type: 'Question Type C (10 Marks)', desc: 'Formulating and solving an LCR series circuit or damped spring-mass system with initial conditions and interpreting transient vs steady-state response.' }
        ]
      },
      formulaSheet: [
        { name: 'Auxiliary Roots & Complementary Function yc', formula: 'm_1 \\ne m_2: C_1 e^{m_1 x} + C_2 e^{m_2 x}; \\quad m_1=m_2=m: (C_1+C_2 x)e^{mx}; \\quad \\alpha \\pm i\\beta: e^{\\alpha x}(C_1\\cos\\beta x + C_2\\sin\\beta x)', note: 'Cauchy-Euler equivalent: replace e^mx with x^m' },
        { name: 'Variation of Parameters Formulas', formula: 'y_p(x) = u_1(x)y_1(x) + u_2(x)y_2(x), \\quad u_1 = -\\int \\frac{y_2 R}{W} dx, \\quad u_2 = \\int \\frac{y_1 R}{W} dx', note: 'W = y1 y2\' - y2 y1\' != 0. Must divide ODE by leading coefficient so y\'\' coeff is 1!' },
        { name: 'Cauchy-Euler Transformation', formula: 'x = e^t \\iff t = \\ln x, \\quad xD = \\theta, \\quad x^2 D^2 = \\theta(\\theta - 1), \\quad x^3 D^3 = \\theta(\\theta-1)(\\theta-2)', note: '\\theta = d/dt' },
        { name: 'Cauchy-Legendre Transformation', formula: 'ax+b = e^t \\iff t = \\ln(ax+b), \\quad (ax+b)D = a\\theta, \\quad (ax+b)^2 D^2 = a^2 \\theta(\\theta-1)', note: '\\theta = d/dt' },
        { name: 'LCR Series Circuit Equation', formula: 'L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C}q = E(t), \\quad i(t) = \\frac{dq}{dt}', note: 'Transient = qc(t) -> 0 as t -> inf; Steady state = qp(t)' }
      ],
      examInsights: [
        {
          title: 'The #1 Trap in VIT FAT Papers on Variation of Parameters',
          desc: 'In VIT FAT papers, the exam asks: "Solve $(x^2 D^2 - xD + 1)y = x\\log x$ by the method of variation of parameters" or "Solve $(x^2 D^2 - 4xD + 6)y = \\sin(\\log x)$".\nCRITICAL RULE: Before computing $u_1 = -\\int \\frac{y_2 R}{W} dx$ and $u_2 = \\int \\frac{y_1 R}{W} dx$, you MUST divide the entire ODE by the leading coefficient $a(x) = x^2$ so the coefficient of $y\'\'$ is 1! That is, $R(x) = \\frac{\\text{RHS}}{x^2}$.'
        },
        {
          title: 'Duplication / Resonance Rule Table',
          desc: 'If $R(x)$ contains $k e^{ax}$ and $a$ is a single root of AE, trial is $A x e^{ax}$; if double root, $A x^2 e^{ax}$. If $R(x) = k\\cos(bx)$ and $\\pm ib$ are roots of AE, trial is $x(A\\cos bx + B\\sin bx)$.'
        }
      ],
      topics: [
        {
          id: 't4-1',
          title: 'Topic 1: Linear Second-Order ODEs with Constant Coefficients',
          theory: 'A linear second-order ODE with constant coefficients has standard form:\n$$a \\frac{d^2y}{dx^2} + b \\frac{dy}{dx} + cy = R(x) \\iff (aD^2 + bD + c)y = R(x)$$\nGeneral solution is $y(x) = y_c(x) + y_p(x)$, where $y_c(x)$ solves homogeneous equation obtained via auxiliary equation $am^2 + bm + c = 0$.'
        },
        {
          id: 't4-2',
          title: 'Topic 2: Solutions of ODE by Method of Undetermined Coefficients',
          theory: 'Assume trial form for $y_p(x)$ with unknown constants $A, B, \\dots$ according to terms in $R(x)$. If any term matches $y_c$, multiply by $x^s$ where $s$ is multiplicity of the root.'
        },
        {
          id: 't4-3',
          title: 'Topic 3 & 4: Method of Variation of Parameters (Constant & Variable)',
          theory: 'For standard form $y\'\' + P(x)y\' + Q(x)y = R(x)$ with complementary function $y_c = C_1 y_1 + C_2 y_2$:\n1. Compute Wronskian $W = y_1 y_2\' - y_2 y_1\' \\ne 0$.\n2. $u_1(x) = -\\int \\frac{y_2 R}{W} dx, \\quad u_2(x) = \\int \\frac{y_1 R}{W} dx$.\n3. $y_p = u_1 y_1 + u_2 y_2$.'
        },
        {
          id: 't4-4',
          title: 'Topic 7 & 8: Steady-State DSP Response & LCR Circuit Simulation',
          theory: 'By Kirchhoff\'s Voltage Law (KVL):\n$$L \\frac{d^2 q}{dt^2} + R \\frac{dq}{dt} + \\frac{1}{C}q = E(t), \\quad i(t) = \\frac{dq}{dt}$$\n- Transient response $q_{tr}(t) = q_c(t) \\to 0$ exponentially as $t \\to \\infty$.\n- Steady-state response $q_{ss}(t) = q_p(t)$ persists indefinitely with amplitude $I_{\\max} = \\frac{E_0}{\\sqrt{R^2 + (\\omega L - 1/(\\omega C))^2}}$.'
        }
      ],
      pyqs: [
      {
            "id": "bamat-q4-1",
            "exam": "BMAT102L FAT April 2025 Slot A1 Q1 \u2014 10 Marks",
            "marks": "10 Marks",
            "question": "Solve $(D^2 - 4D + 3)y = e^x \\cos 2x$ by the method of undetermined coefficients.",
            "solution": "Step 1 (Complementary Function $y_c$):\nThe auxiliary equation is $m^2 - 4m + 3 = (m - 1)(m - 3) = 0 \\implies m = 1, 3$.\n$$y_c(x) = C_1 e^x + C_2 e^{3x}$$\n\nStep 2 (Trial Particular Integral $y_p$):\nHere $R(x) = e^x \\cos 2x$, which corresponds to complex roots $1 \\pm 2i$. Since $1 \\pm 2i$ is not a root of the AE, no $x$ multiplier is needed!\nAssume: $y_p(x) = e^x (A \\cos 2x + B \\sin 2x)$.\n\nStep 3 (Differentiating using product rule):\n$$y_p'(x) = e^x [(A + 2B) \\cos 2x + (B - 2A) \\sin 2x]$$\n$$y_p''(x) = e^x [(-3A + 4B) \\cos 2x + (-3B - 4A) \\sin 2x]$$\nSubstitute into $y_p'' - 4y_p' + 3y_p = e^x \\cos 2x$:\n$$e^x [(-3A + 4B - 4A - 8B + 3A) \\cos 2x + (-3B - 4A - 4B + 8A + 3B) \\sin 2x] = e^x \\cos 2x$$\n$$(-4A - 4B) \\cos 2x + (4A - 4B) \\sin 2x = 1 \\cdot \\cos 2x + 0 \\cdot \\sin 2x$$\n\nStep 4 (Equating coefficients of $\\cos 2x$ and $\\sin 2x$):\n$$4A - 4B = 0 \\implies A = B$$\n$$-4A - 4B = 1 \\implies -8A = 1 \\implies A = B = -\\frac{1}{8}$$\nHence $y_p(x) = -\\frac{1}{8}e^x (\\cos 2x + \\sin 2x)$.\n\nGeneral Solution: $y(x) = C_1 e^x + C_2 e^{3x} - \\frac{1}{8}e^x(\\cos 2x + \\sin 2x)$."
      },
      {
            "id": "bamat-q4-2",
            "exam": "VIT Question Bank Sheet 4 Q3 \u2014 Higher Order Constant Coefficients",
            "marks": "10 Marks",
            "question": "Solve $(D^3 + D^2 - 4D - 4)y = 3x^2 - 4x + 1$.",
            "solution": "Step 1 (Complementary Function $y_c$):\nAuxiliary equation: $m^3 + m^2 - 4m - 4 = m^2(m+1) - 4(m+1) = (m^2 - 4)(m+1) = 0$.\nRoots: $m = -1, 2, -2$.\n$$y_c(x) = C_1 e^{-x} + C_2 e^{2x} + C_3 e^{-2x}$$\n\nStep 2 (Particular Integral $y_p$ for polynomial $3x^2 - 4x + 1$):\n$$y_p = \\frac{1}{D^3 + D^2 - 4D - 4} (3x^2 - 4x + 1) = -\\frac{1}{4 \\left[1 + D - \\frac{D^2}{4} - \\frac{D^3}{4}\\right]} (3x^2 - 4x + 1)$$\nExpanding using binomial theorem $[1 + z]^{-1} = 1 - z + z^2 - \\dots$ up to $D^2$:\n$$= -\\frac{1}{4} \\left[ 1 - \\left(D - \\frac{D^2}{4}\\right) + D^2 \\right] (3x^2 - 4x + 1) = -\\frac{1}{4} \\left[ 1 - D + \\frac{5}{4}D^2 \\right] (3x^2 - 4x + 1)$$\n- $D(3x^2 - 4x + 1) = 6x - 4$\n- $D^2(3x^2 - 4x + 1) = 6$\nSubstituting:\n$$= -\\frac{1}{4} \\left[ (3x^2 - 4x + 1) - (6x - 4) + \\frac{5}{4}(6) \\right] = -\\frac{1}{4} \\left[ 3x^2 - 10x + \\frac{25}{2} \\right] = -\\frac{3}{4}x^2 + \\frac{5}{2}x - \\frac{25}{8}$$\n\nGeneral Solution: $y(x) = C_1 e^{-x} + C_2 e^{2x} + C_3 e^{-2x} - \\frac{3}{4}x^2 + \\frac{5}{2}x - \\frac{25}{8}$."
      },
      {
            "id": "bamat-q4-3",
            "exam": "VIT Question Bank Sheet 4 Q6 \u2014 Method of Undetermined Coefficients with Resonance",
            "marks": "10 Marks",
            "question": "Solve $y'' - 2y' + y = x e^x$ using the method of undetermined coefficients.",
            "solution": "Step 1 (Complementary Function $y_c$):\n$m^2 - 2m + 1 = (m - 1)^2 = 0 \\implies m = 1, 1$ (repeated root).\n$$y_c(x) = (C_1 + C_2 x) e^x$$\n\nStep 2 (Determine Form of $y_p$ with Duplication Rule):\nThe term $x e^x$ has root $1$, which already appears twice in $y_c(x)$.\nTherefore, multiply standard linear form $(Ax + B)e^x$ by $x^2$:\n$$y_p(x) = x^2 (Ax + B) e^x = (Ax^3 + Bx^2) e^x$$\n\nStep 3 (Substitute and Equate):\nSince $(D - 1)^2 [e^x f(x)] = e^x D^2 f(x)$:\n$$(D - 1)^2 [(Ax^3 + Bx^2) e^x] = e^x D^2 (Ax^3 + Bx^2) = e^x (6Ax + 2B)$$\nSetting equal to RHS $x e^x$:\n$$e^x (6Ax + 2B) = x e^x \\implies 6A = 1 \\implies A = \\frac{1}{6}, \\quad 2B = 0 \\implies B = 0$$\nThus $y_p(x) = \\frac{1}{6} x^3 e^x$.\n\nGeneral Solution: $y(x) = (C_1 + C_2 x) e^x + \\frac{1}{6} x^3 e^x$."
      },
      {
            "id": "bamat-q4-4",
            "exam": "VIT Question Bank Sheet 4 Q9 & FAT 2024 \u2014 Variation of Parameters",
            "marks": "10 Marks",
            "question": "Solve $y'' + y = \\sec x \\tan x$ by the method of variation of parameters.",
            "solution": "Step 1 (Complementary Function $y_c$):\n$m^2 + 1 = 0 \\implies m = \\pm i$.\n$$y_c(x) = C_1 \\cos x + C_2 \\sin x, \\quad y_1 = \\cos x, \\quad y_2 = \\sin x$$\n\nStep 2 (Compute Wronskian $W$):\n$$W = \\begin{vmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{vmatrix} = \\cos^2 x + \\sin^2 x = 1 \\ne 0$$\n\nStep 3 (Compute $u_1(x)$ and $u_2(x)$):\n- $R(x) = \\sec x \\tan x = \\frac{\\sin x}{\\cos^2 x}$.\n$$u_1(x) = -\\int \\frac{y_2 R}{W} dx = -\\int \\sin x \\cdot \\frac{\\sin x}{\\cos^2 x} dx = -\\int \\tan^2 x \\, dx = -\\int (\\sec^2 x - 1) dx = -\\tan x + x$$\n$$u_2(x) = \\int \\frac{y_1 R}{W} dx = \\int \\cos x \\cdot \\frac{\\sin x}{\\cos^2 x} dx = \\int \\tan x \\, dx = \\ln|\\sec x|$$\n\nStep 4 (Construct $y_p$):\n$$y_p = u_1 y_1 + u_2 y_2 = (x - \\tan x)\\cos x + (\\ln|\\sec x|)\\sin x = x \\cos x - \\sin x + \\sin x \\ln|\\sec x|$$\nNote: The term $-\\sin x$ can be absorbed into constant $C_2$.\n\nGeneral Solution: $y(x) = C_1 \\cos x + C_2 \\sin x + x \\cos x + \\sin x \\ln|\\sec x|$."
      },
      {
            "id": "bamat-q4-5",
            "exam": "VIT Question Bank Sheet 4 Q12 \u2014 Variation of Parameters",
            "marks": "10 Marks",
            "question": "Solve $y'' + 4y = \\tan 2x$ by the method of variation of parameters.",
            "solution": "Step 1 (Complementary Function $y_c$):\n$m^2 + 4 = 0 \\implies m = \\pm 2i$.\n$$y_c(x) = C_1 \\cos 2x + C_2 \\sin 2x, \\quad y_1 = \\cos 2x, \\quad y_2 = \\sin 2x$$\n\nStep 2 (Compute Wronskian $W$):\n$$W = \\begin{vmatrix} \\cos 2x & \\sin 2x \\\\ -2\\sin 2x & 2\\cos 2x \\end{vmatrix} = 2(\\cos^2 2x + \\sin^2 2x) = 2$$\n\nStep 3 (Compute $u_1(x)$ and $u_2(x)$ with $R(x) = \\tan 2x$):\n$$u_1(x) = -\\int \\frac{\\sin 2x \\tan 2x}{2} dx = -\\frac{1}{2} \\int \\frac{\\sin^2 2x}{\\cos 2x} dx = -\\frac{1}{2} \\int \\frac{1 - \\cos^2 2x}{\\cos 2x} dx$$\n$$= -\\frac{1}{2} \\int (\\sec 2x - \\cos 2x) dx = -\\frac{1}{4} \\ln|\\sec 2x + \\tan 2x| + \\frac{1}{4} \\sin 2x$$\n$$u_2(x) = \\int \\frac{\\cos 2x \\tan 2x}{2} dx = \\frac{1}{2} \\int \\sin 2x \\, dx = -\\frac{1}{4} \\cos 2x$$\n\nStep 4 (Construct $y_p$ and General Solution):\n$$y_p = u_1 y_1 + u_2 y_2 = -\\frac{1}{4} \\cos 2x \\ln|\\sec 2x + \\tan 2x| + \\frac{1}{4} \\sin 2x \\cos 2x - \\frac{1}{4} \\cos 2x \\sin 2x$$\n$$y_p = -\\frac{1}{4} \\cos 2x \\ln|\\sec 2x + \\tan 2x|$$\nGeneral Solution: $y(x) = C_1 \\cos 2x + C_2 \\sin 2x - \\frac{1}{4} \\cos 2x \\ln|\\sec 2x + \\tan 2x|$."
      },
      {
            "id": "bamat-q4-6",
            "exam": "BMAT102L FAT April 2025 Slot A1 Q2 \u2014 10 Marks",
            "marks": "10 Marks",
            "question": "Solve $(x^2 D^2 - xD + 1)y = x\\ln x$ by the method of variation of parameters.",
            "solution": "Step 1 (Divide by $x^2$ to put in Standard Form $y'' + P(x)y' + Q(x)y = R(x)$):\n$$y'' - \\frac{1}{x}y' + \\frac{1}{x^2}y = \\frac{\\ln x}{x}, \\quad \\text{so } R(x) = \\frac{\\ln x}{x}$$\n\nStep 2 (Find $y_c$ via Cauchy-Euler substitution $y = x^m$):\nSubstituting $y = x^m$ into $x^2 y'' - x y' + y = 0$ gives $m(m - 1) - m + 1 = (m - 1)^2 = 0 \\implies m = 1, 1$.\nThus $y_c(x) = C_1 x + C_2 x\\ln x$, with $y_1(x) = x$ and $y_2(x) = x\\ln x$.\n\nStep 3 (Compute Wronskian $W(y_1, y_2)$):\n$$W = \\begin{vmatrix} x & x\\ln x \\\\ 1 & 1 + \\ln x \\end{vmatrix} = x(1 + \\ln x) - x\\ln x = x$$\n\nStep 4 (Compute $u_1(x)$ and $u_2(x)$ using $R(x) = \\frac{\\ln x}{x}$):\n$$u_1(x) = -\\int \\frac{y_2(x) R(x)}{W} dx = -\\int \\frac{(x\\ln x)\\left(\\frac{\\ln x}{x}\\right)}{x} dx = -\\int \\frac{(\\ln x)^2}{x} dx = -\\frac{(\\ln x)^3}{3}$$\n$$u_2(x) = \\int \\frac{y_1(x) R(x)}{W} dx = \\int \\frac{x \\left(\\frac{\\ln x}{x}\\right)}{x} dx = \\int \\frac{\\ln x}{x} dx = \\frac{(\\ln x)^2}{2}$$\n\nStep 5 (Construct $y_p$ and General Solution):\n$$y_p(x) = u_1 y_1 + u_2 y_2 = -\\frac{(\\ln x)^3}{3} x + \\frac{(\\ln x)^2}{2}(x\\ln x) = \\frac{1}{6}x(\\ln x)^3$$\nGeneral Solution: $y(x) = C_1 x + C_2 x\\ln x + \\frac{1}{6}x(\\ln x)^3$."
      },
      {
            "id": "bamat-q4-7",
            "exam": "VIT Question Bank Sheet 4 Q16 \u2014 Cauchy-Euler Differential Equation",
            "marks": "10 Marks",
            "question": "Solve the Cauchy-Euler equation: $x^2 \\frac{d^2 y}{dx^2} - 3x \\frac{dy}{dx} + 5y = x^2 \\sin(\\ln x)$.",
            "solution": "Step 1 (Transformation to Constant Coefficients):\nLet $x = e^z \\iff z = \\ln x$. Then $x D = \\theta$ and $x^2 D^2 = \\theta(\\theta - 1)$ where $\\theta = \\frac{d}{dz}$.\n$$[\\theta(\\theta - 1) - 3\\theta + 5] y = e^{2z} \\sin z \\implies (\\theta^2 - 4\\theta + 5) y = e^{2z} \\sin z$$\n\nStep 2 (Complementary Function $y_c$):\nAuxiliary equation: $m^2 - 4m + 5 = 0 \\implies m = \\frac{4 \\pm \\sqrt{16-20}}{2} = 2 \\pm i$.\n$$y_c(z) = e^{2z} [C_1 \\cos z + C_2 \\sin z]$$\nIn terms of $x$: $y_c(x) = x^2 [C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)]$.\n\nStep 3 (Particular Integral $y_p$):\n$$y_p = \\frac{1}{\\theta^2 - 4\\theta + 5} (e^{2z} \\sin z) = e^{2z} \\frac{1}{(\\theta+2)^2 - 4(\\theta+2) + 5} \\sin z = e^{2z} \\frac{1}{\\theta^2 + 1} \\sin z$$\nSince $\\theta^2 \\to -1^2 = -1$, the denominator becomes 0 (resonance rule):\n$$y_p = e^{2z} \\left[ -\\frac{z}{2} \\cos z \\right] = -\\frac{1}{2} z e^{2z} \\cos z$$\nIn terms of $x$: $y_p(x) = -\\frac{1}{2} x^2 \\ln x \\cos(\\ln x)$.\n\nGeneral Solution: $y(x) = x^2 [C_1 \\cos(\\ln x) + C_2 \\sin(\\ln x)] - \\frac{1}{2} x^2 \\ln x \\cos(\\ln x)$."
      },
      {
            "id": "bamat-q4-8",
            "exam": "VIT Question Bank Sheet 4 Q20 \u2014 Cauchy-Legendre Differential Equation",
            "marks": "10 Marks",
            "question": "Solve the Cauchy-Legendre equation: $(2x + 3)^2 \\frac{d^2 y}{dx^2} - 2(2x + 3) \\frac{dy}{dx} - 12y = 6x$.",
            "solution": "Step 1 (Transformation):\nLet $2x + 3 = e^z \\iff z = \\ln(2x + 3) \\implies x = \\frac{e^z - 3}{2}$.\n$(2x+3) D = 2\\theta$ and $(2x+3)^2 D^2 = 4\\theta(\\theta-1)$ where $\\theta = d/dz$.\n$$[4\\theta(\\theta-1) - 2(2\\theta) - 12] y = 6 \\left(\\frac{e^z - 3}{2}\\right) = 3e^z - 9$$\n$$[4\\theta^2 - 8\\theta - 12] y = 3e^z - 9 \\implies (\\theta^2 - 2\\theta - 3) y = \\frac{3}{4}e^z - \\frac{9}{4}$$\n\nStep 2 (Complementary Function $y_c$):\n$m^2 - 2m - 3 = (m - 3)(m + 1) = 0 \\implies m = 3, -1$.\n$$y_c(z) = C_1 e^{3z} + C_2 e^{-z} = C_1 (2x+3)^3 + C_2 (2x+3)^{-1}$$\n\nStep 3 (Particular Integral $y_p$):\n- For $\\frac{3}{4}e^z$: $\\frac{3/4}{1^2 - 2(1) - 3} e^z = \\frac{3/4}{-4} e^z = -\\frac{3}{16} e^z = -\\frac{3}{16}(2x+3)$.\n- For $-\\frac{9}{4}$: $\\frac{-9/4}{0 - 0 - 3} = \\frac{3}{4}$.\n$$y_p(x) = -\\frac{3}{16}(2x+3) + \\frac{3}{4} = -\\frac{3}{8}x + \\frac{3}{16}$$\n\nGeneral Solution: $y(x) = C_1 (2x+3)^3 + \\frac{C_2}{2x+3} - \\frac{3}{16}(2x+3) + \\frac{3}{4}$."
      },
      {
            "id": "bamat-q4-9",
            "exam": "VIT Question Bank Sheet 4 Q24 \u2014 Simultaneous Differential Equations",
            "marks": "10 Marks",
            "question": "Solve the system of simultaneous differential equations: $\\frac{dx}{dt} + 2x - 3y = t$ and $\\frac{dy}{dt} - 3x + 2y = e^{2t}$.",
            "solution": "Step 1 (Write in Operator Form with $D = d/dt$):\n1. $(D + 2)x - 3y = t$\n2. $-3x + (D + 2)y = e^{2t}$\n\nStep 2 (Eliminate $y$):\nMultiply (1) by $(D + 2)$ and (2) by $3$, then add:\n$$[(D + 2)^2 - 9] x = (D + 2)t + 3e^{2t}$$\n$$(D^2 + 4D - 5) x = (1 + 2t) + 3e^{2t}$$\n\nStep 3 (Solve for $x(t)$):\nAE: $m^2 + 4m - 5 = (m + 5)(m - 1) = 0 \\implies m = 1, -5$.\n$$x_c(t) = C_1 e^t + C_2 e^{-5t}$$\n- $x_{p1} = \\frac{1}{D^2+4D-5}(2t+1) = -\\frac{1}{5}\\left(1 + \\frac{4D}{5}\\right)^{-1}(2t+1) = -\\frac{2}{5}t - \\frac{13}{25}$.\n- $x_{p2} = \\frac{1}{D^2+4D-5}(3e^{2t}) = \\frac{3}{2^2+4(2)-5}e^{2t} = \\frac{3}{7}e^{2t}$.\n$$x(t) = C_1 e^t + C_2 e^{-5t} - \\frac{2}{5}t - \\frac{13}{25} + \\frac{3}{7}e^{2t}$$\n\nStep 4 (Find $y(t)$ using $3y = \\frac{dx}{dt} + 2x - t$):\nSubstituting $x(t)$ and $dx/dt$ gives $y(t) = C_1 e^t - C_2 e^{-5t} - \\frac{1}{5}t - \\frac{11}{25} + \\frac{4}{7}e^{2t}$."
      },
      {
            "id": "bamat-q4-10",
            "exam": "VIT Question Bank Q15 \u2014 Full LCR Series Circuit Problem",
            "marks": "10 Marks",
            "question": "An inductor of $L = 2\\text{ H}$, resistor of $R = 16\\,\\Omega$, and capacitor of $C = 0.02\\text{ F}$ are connected in series with a battery of EMF $E(t) = 100\\sin 2t$. At $t = 0$, the charge on the capacitor and current in the circuit are zero ($q(0) = 0, i(0) = 0$). Find the charge $q(t)$ and current $i(t)$ for $t > 0$.",
            "solution": "Step 1 (Formulate the ODE):\nSubstituting $L = 2, R = 16, 1/C = 1/0.02 = 50$, and $E(t) = 100\\sin 2t$:\n$$2 \\frac{d^2 q}{dt^2} + 16 \\frac{dq}{dt} + 50q = 100\\sin 2t \\implies \\frac{d^2 q}{dt^2} + 8 \\frac{dq}{dt} + 25q = 50\\sin 2t$$\n\nStep 2 (Transient Solution $q_c(t)$):\nAuxiliary equation: $m^2 + 8m + 25 = 0 \\implies m = \\frac{-8 \\pm \\sqrt{64-100}}{2} = -4 \\pm 3i$ (underdamped).\n$$q_c(t) = e^{-4t}(C_1 \\cos 3t + C_2 \\sin 3t)$$\n\nStep 3 (Steady-State Solution $q_p(t)$):\nAssume $q_p(t) = A \\cos 2t + B \\sin 2t$. Substituting into $q'' + 8q' + 25q = 50\\sin 2t$:\n$$(21A + 16B)\\cos 2t + (21B - 16A)\\sin 2t = 50\\sin 2t$$\n$$21A + 16B = 0, \\quad -16A + 21B = 50 \\implies A = -\\frac{160}{89}, \\quad B = \\frac{210}{89}$$\n\nStep 4 (Apply Initial Conditions $q(0) = 0, q'(0) = 0$):\n- $q(0) = C_1 - \\frac{160}{89} = 0 \\implies C_1 = \\frac{160}{89}$.\n- $q'(0) = -4C_1 + 3C_2 + 2B = 0 \\implies 3C_2 = 4\\left(\\frac{160}{89}\\right) - 2\\left(\\frac{210}{89}\\right) = \\frac{220}{89} \\implies C_2 = \\frac{220}{267}$.\n\nFinal Charge:\n$$q(t) = \\underbrace{e^{-4t}\\left(\\frac{160}{89}\\cos 3t + \\frac{220}{267}\\sin 3t\\right)}_{\\text{Transient response } q_{tr}(t) \\to 0} + \\underbrace{\\left(-\\frac{160}{89}\\cos 2t + \\frac{210}{89}\\sin 2t\\right)}_{\\text{Steady-state response } q_{ss}(t)}$$\nand current $i(t) = \\frac{dq}{dt}$."
      }
]
    },
    {
      id: 'bamat-m5',
      moduleNum: 5,
      pdfUrl: '/pdfs/calculus/Math_MOD-5.pdf',
      title: 'Partial Differential Equations (PDEs) (CO: 5)',
      co: 'CO: 5',
      examScope: 'FAT (Final Assessment)',
      weightage: '20-25 Marks in FAT',
      status: 'not_confident',
      scope: 'Formation of partial differential equations, Solutions of standard types of first-order partial differential equations-1, Solutions of standard types of first-order partial differential equations-2, Lagrange\'s linear equation and problems-1, Lagrange\'s linear equation and problems-2, Solution of a linear first-order PDE by separation of variables, Lagrange\'s equation for flow modelling, and Separation of variables for analyzing CPU temperature.',
      blueprint: {
        marksTotal: '20 to 25 Marks in FAT (Two 5+5 split questions or one 5+5 plus a 10-mark question)',
        questionTypes: [
          { type: 'Question Type A (5-10 Marks)', desc: 'Formation of PDE by eliminating arbitrary constants or arbitrary function $\\phi(u, v) = 0$ using Jacobian determinant.' },
          { type: 'Question Type B (10 Marks)', desc: 'Lagrange\'s Linear Equation $Pp + Qq = R$ solved using Method of Multipliers (e.g. $(x, y, z), (1/x, 1/y, 1/z)$ or differences).' },
          { type: 'Question Type C (10 Marks)', desc: 'Method of Separation of Variables for first-order linear PDE with multi-term exponential boundary conditions, or CPU cooling fin heat dissipation equation.' }
        ]
      },
      formulaSheet: [
        { name: 'Eliminating One Arbitrary Function', formula: '\\begin{vmatrix} u_x + p u_z & v_x + p v_z \\\\ u_y + q u_z & v_y + q v_z \\end{vmatrix} = 0', note: 'Yields quasi-linear PDE Pp + Qq = R' },
        { name: 'First-Order Nonlinear PDE Types', formula: 'Type I: F(p, q) = 0 \\implies z = ax + \\phi(a)y + c; \\quad Type II: F(z, p, q) = 0 \\implies u = x + ay; \\quad Type IV: z = px + qy + f(p, q) \\implies z = ax + by + f(a, b)', note: 'Clairaut singular integral: eliminate a, b from x + f_a = 0, y + f_b = 0' },
        { name: 'Lagrange Auxiliary Equations', formula: '\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R} = \\frac{l\\,dx + m\\,dy + n\\,dz}{lP + mQ + nR}', note: 'If denominator lP + mQ + nR = 0, numerator l dx + m dy + n dz = 0 integrates to u(x, y, z) = c1' },
        { name: 'Separation of Variables Recipe', formula: 'u(x, y) = X(x)Y(y) \\implies \\frac{a X\' - c X}{X} = -\\frac{b Y\'}{Y} = k', note: 'Write multi-term sum for boundary conditions using superposition' },
        { name: '1D Reaction-Diffusion CPU Fin PDE', formula: 'a u_{xx} - b u_t + c u = 0, \\quad u(x, t) = e^{\\delta t} w(x, t) \\implies \\delta = \\frac{c}{b}, \\quad w_t = \\frac{a}{b} w_{xx}', note: 'Reduces directly to standard Fourier heat diffusion' }
      ],
      examInsights: [
        {
          title: 'The Multiplier Denominator Zero Golden Rule',
          desc: 'If you choose multipliers $(l, m, n)$ such that the denominator $lP + mQ + nR = 0$, then the numerator MUST also be zero: $l\\,dx + m\\,dy + n\\,dz = 0$, which integrates directly to give $u(x, y, z) = c_1$!\nStandard VIT Multiplier Sets to Test First: $(1, 1, 1)$, $(x, y, z)$, $(1/x, 1/y, 1/z)$, and $(yz, zx, xy)$.'
        },
        {
          title: 'Eliminating Arbitrary Functions Jacobian Rule',
          desc: 'For $f(u, v) = 0$, using the $2\\times 2$ Jacobian determinant is three times faster and completely eliminates algebraic signs errors compared to manual chain-rule differentiation!'
        }
      ],
      topics: [
        {
          id: 't5-1',
          title: 'Topic 1: Formation of Partial Differential Equations',
          theory: '1. Eliminating Arbitrary Constants: Differentiate $F(x, y, z, a, b) = 0$ with respect to $x$ and $y$ (where $z_x = p, z_y = q$) and eliminate $a, b$.\n2. Eliminating Arbitrary Function $\\phi(u, v) = 0$: Evaluated via Jacobian determinant $\\begin{vmatrix} u_x + p u_z & v_x + p v_z \\\\ u_y + q u_z & v_y + q v_z \\end{vmatrix} = 0$.'
        },
        {
          id: 't5-2',
          title: 'Topic 4 & 5: Lagrange\'s Linear Equation (Pp + Qq = R)',
          theory: 'Subsidiary equations: $\\frac{dx}{P} = \\frac{dy}{Q} = \\frac{dz}{R}$.\n- Method 1 (Grouping): Pair any two ratios if the third variable cancels out.\n- Method 2 (Multipliers): Form linear combinations where denominator equals zero.'
        },
        {
          id: 't5-3',
          title: 'Topic 6: Solution of Linear First-Order PDE by Separation of Variables',
          theory: 'Substitute product form $u(x, y) = X(x)Y(y)$ into $a u_x + b u_y + c u = 0$. Divide by $XY$ to decouple into two ordinary differential equations equal to separation constant $k$. Apply superposition for multi-term exponential boundary conditions.'
        },
        {
          id: 't5-4',
          title: 'Topic 7 & 8: Flow Modeling & Microprocessor CPU Temperature',
          theory: 'Lagrange\'s equation governs advection-reaction flow: $\\frac{\\partial c}{\\partial t} + v_0 \\frac{\\partial c}{\\partial x} = -\\lambda c$, solved along characteristic trajectories $x - v_0 t = k_1$.\nMicroprocessor heat-sink excess temperature satisfies $a u_{xx} - b u_t + c u = 0$.'
        }
      ],
      pyqs: [
      {
            "id": "bamat-q5-1",
            "exam": "BMAT102L FAT April 2025 Q3(ii) & VIT Question Bank Q20",
            "marks": "10 Marks",
            "question": "Form the partial differential equation by eliminating the arbitrary function from: (a) $f(ax + by + cz, x^2 + y^2 + z^2) = 0$, and (b) $\\phi(x^2 + y^2 + z^2, z^2 - 2xy) = 0$.",
            "solution": "Part (a) [FAT April 2025]:\nLet $u = ax + by + cz$ and $v = x^2 + y^2 + z^2$. Using the Jacobian formula:\n$$\\begin{vmatrix} a + cp & 2x + 2zp \\\\ b + cq & 2y + 2zq \\end{vmatrix} = 0 \\implies \\frac{a + cp}{b + cq} = \\frac{x + zp}{y + zq}$$\n$$(a + cp)(y + zq) = (b + cq)(x + zp)$$\n$$ay + azq + cpy + czpq = bx + bzp + cqx + czpq$$\nGroup terms with $p$ and $q$:\n$$(cy - bz)p + (az - cx)q = bx - ay$$\n\nPart (b) [VIT QB Q20]:\nLet $u = x^2 + y^2 + z^2$ and $v = z^2 - 2xy$:\n$$\\begin{vmatrix} 2x + 2zp & -2y + 2zp \\\\ 2y + 2zq & -2x + 2zq \\end{vmatrix} = 0$$\n$$(x + zp)(zq - x) = (y + zq)(zp - y)$$\nBoxed Answer: $(cy - bz)p + (az - cx)q = bx - ay$."
      },
      {
            "id": "bamat-q5-2",
            "exam": "BMAT102L FAT April 2025 Q4(i) & VIT Question Bank Q1(iv)",
            "marks": "10 Marks",
            "question": "Solve the Lagrange linear PDE: $x^2 p - y^2 q = z(x - y)$.",
            "solution": "Auxiliary equations are: $\\frac{dx}{x^2} = \\frac{dy}{-y^2} = \\frac{dz}{z(x-y)}$.\n\nFirst Integral (Grouping first two):\n$$\\int \\frac{dx}{x^2} = -\\int \\frac{dy}{y^2} \\implies -\\frac{1}{x} = \\frac{1}{y} - c_1 \\implies \\frac{1}{x} + \\frac{1}{y} = c_1$$\n\nSecond Integral (Multipliers $l = 1, m = 1, n = 0$):\n$$\\frac{dx + dy}{x^2 - y^2} = \\frac{dz}{z(x-y)} \\implies \\frac{dx + dy}{(x-y)(x+y)} = \\frac{dz}{z(x-y)}$$\nCancel $(x-y)$:\n$$\\frac{dx + dy}{x + y} = \\frac{dz}{z} \\implies \\ln|x + y| = \\ln|z| + \\ln c_2 \\implies \\frac{x + y}{z} = c_2$$\n\nGeneral solution: $\\phi\\left(\\frac{1}{x} + \\frac{1}{y}, \\frac{x + y}{z}\\right) = 0$."
      },
      {
            "id": "bamat-q5-3",
            "exam": "VIT Question Bank Q2 & Q21 \u2014 High-Frequency 10-Mark Problem",
            "marks": "10 Marks",
            "question": "Using the method of separation of variables, solve $4\\frac{\\partial u}{\\partial x} + \\frac{\\partial u}{\\partial y} = 3u$, given that: (a) $u(0, y) = e^{-5y}$, and (b) $u(0, y) = 3e^{-y} - e^{-5y}$.",
            "solution": "Step 1 (Substitute $u(x, y) = X(x)Y(y)$):\n$$4X'(x)Y(y) + X(x)Y'(y) = 3X(x)Y(y)$$\nDivide throughout by $X(x)Y(y)$ and separate variables:\n$$4\\frac{X'}{X} + \\frac{Y'}{Y} = 3 \\implies \\frac{4X' - 3X}{X} = -\\frac{Y'}{Y} = k$$\nLet us set $\\frac{Y'}{Y} = -k \\implies Y(y) = C_2 e^{-ky}$. Then:\n$$4\\frac{X'}{X} = 3 + k \\implies \\frac{X'}{X} = \\frac{3+k}{4} \\implies X(x) = C_1 e^{\\left(\\frac{3+k}{4}\\right)x}$$\nThus the separated building-block solution is:\n$$u_k(x, y) = C e^{\\left(\\frac{3+k}{4}\\right)x - ky}$$\n\nStep 2 (Part a \u2014 Match $u(0, y) = e^{-5y}$):\nSetting $x = 0$ gives $u(0, y) = C e^{-ky} = 1 \\cdot e^{-5y} \\implies C = 1$ and $k = 5$. Then $\\frac{3+5}{4} = 2$. Hence:\n$$u(x, y) = e^{2x - 5y}$$\n\nStep 3 (Part b \u2014 Match $u(0, y) = 3e^{-y} - e^{-5y}$ by Superposition):\nWrite $u(x, y) = C_1 e^{\\left(\\frac{3+k_1}{4}\\right)x - k_1 y} + C_2 e^{\\left(\\frac{3+k_2}{4}\\right)x - k_2 y}$. At $x = 0$:\n- First term: $C_1 = 3, k_1 = 1 \\implies \\frac{3+1}{4} = 1 \\implies 3e^{x - y}$.\n- Second term: $C_2 = -1, k_2 = 5 \\implies \\frac{3+5}{4} = 2 \\implies -e^{2x - 5y}$.\n\nCombining both modes gives:\n$$u(x, y) = 3e^{x - y} - e^{2x - 5y}$$\nBoxed Answer: $u(x, y) = 3e^{x - y} - e^{2x - 5y}$."
      },
      {
            "id": "bamat-q5-4",
            "exam": "VIT Question Bank Sheet 5 Q4 \u2014 Eliminating Arbitrary Constants",
            "marks": "6 Marks",
            "question": "Form the partial differential equation by eliminating arbitrary constants $a$ and $b$ from $(x - a)^2 + (y - b)^2 + z^2 = r^2$.",
            "solution": "Step 1 (Differentiate with respect to $x$ treating $z$ as dependent variable):\n$$2(x - a) + 2z \\frac{\\partial z}{\\partial x} = 0 \\implies x - a = -zp$$\n\nStep 2 (Differentiate with respect to $y$):\n$$2(y - b) + 2z \\frac{\\partial z}{\\partial y} = 0 \\implies y - b = -zq$$\n\nStep 3 (Substitute back into Original Equation):\n$$(-zp)^2 + (-zq)^2 + z^2 = r^2$$\n$$z^2 p^2 + z^2 q^2 + z^2 = r^2 \\implies z^2(p^2 + q^2 + 1) = r^2$$\nBoxed Answer: $z^2(p^2 + q^2 + 1) = r^2$."
      },
      {
            "id": "bamat-q5-5",
            "exam": "VIT Question Bank Sheet 5 Q7 \u2014 Standard Type I Non-Linear PDE",
            "marks": "6 Marks",
            "question": "Solve the first-order partial differential equation: $p^2 + q^2 = m^2$.",
            "solution": "Step 1 (Identify Standard Type I: $f(p, q) = 0$):\nThis equation contains only $p$ and $q$, with no $x, y, z$.\n\nStep 2 (Trial Solution):\nAssume $z = ax + by + c$.\nThen $p = \\frac{\\partial z}{\\partial x} = a$ and $q = \\frac{\\partial z}{\\partial y} = b$.\nSubstituting into given PDE:\n$$a^2 + b^2 = m^2 \\implies b = \\pm \\sqrt{m^2 - a^2}$$\n\nStep 3 (Complete Integral):\n$$z = ax \\pm \\sqrt{m^2 - a^2}\\, y + c$$\nwhere $a$ and $c$ are arbitrary constants.\nBoxed Answer: $z = ax \\pm \\sqrt{m^2 - a^2}\\, y + c$."
      },
      {
            "id": "bamat-q5-6",
            "exam": "VIT Question Bank Sheet 5 Q10 \u2014 Standard Type II: $f(z, p, q) = 0$",
            "marks": "8 Marks",
            "question": "Solve the partial differential equation: $9(p^2 z + q^2) = 4$.",
            "solution": "Step 1 (Identify Type II: $f(z, p, q) = 0$):\nLet $u = x + ay$ where $a$ is arbitrary constant.\nThen $p = \\frac{dz}{du}$ and $q = a\\frac{dz}{du}$.\n\nStep 2 (Substitute into PDE):\n$$9 \\left[ z \\left(\\frac{dz}{du}\\right)^2 + a^2 \\left(\\frac{dz}{du}\\right)^2 \\right] = 4 \\implies 9(z + a^2) \\left(\\frac{dz}{du}\\right)^2 = 4$$\n$$\\frac{dz}{du} = \\frac{2}{3\\sqrt{z + a^2}} \\implies 3\\sqrt{z + a^2} \\, dz = 2 \\, du$$\n\nStep 3 (Integrate Both Sides):\n$$3 \\left[ \\frac{2}{3} (z + a^2)^{3/2} \\right] = 2u + c \\implies 2(z + a^2)^{3/2} = 2(x + ay) + c$$\n$$(z + a^2)^{3/2} = x + ay + b \\implies (z + a^2)^3 = (x + ay + b)^2$$\nBoxed Answer: $(z + a^2)^3 = (x + ay + b)^2$."
      },
      {
            "id": "bamat-q5-7",
            "exam": "VIT Question Bank Sheet 5 Q13 \u2014 Standard Type III: $f(x, p) = g(y, q)$",
            "marks": "8 Marks",
            "question": "Solve the separable PDE: $p^2 - x = q^2 - y$.",
            "solution": "Step 1 (Identify Standard Type III):\nVariables are separated on either side: $f(x, p) = p^2 - x$ and $g(y, q) = q^2 - y$.\nSet both equal to an arbitrary constant $a^2$:\n$$p^2 - x = a^2 \\implies p = \\sqrt{x + a^2}$$\n$$q^2 - y = a^2 \\implies q = \\sqrt{y + a^2}$$\n\nStep 2 (Integrate Total Differential $dz = p \\, dx + q \\, dy$):\n$$dz = \\sqrt{x + a^2} \\, dx + \\sqrt{y + a^2} \\, dy$$\nIntegrating both sides:\n$$z = \\frac{2}{3}(x + a^2)^{3/2} + \\frac{2}{3}(y + a^2)^{3/2} + b$$\nwhere $a$ and $b$ are arbitrary constants.\nBoxed Answer: $z = \\frac{2}{3}(x + a^2)^{3/2} + \\frac{2}{3}(y + a^2)^{3/2} + b$."
      },
      {
            "id": "bamat-q5-8",
            "exam": "VIT Question Bank Sheet 5 Q16 \u2014 Standard Type IV (Clairaut's Form)",
            "marks": "8 Marks",
            "question": "Solve the Clairaut partial differential equation: $z = px + qy + p^2 + q^2$ and find its singular solution.",
            "solution": "Step 1 (Complete Integral):\nThe standard Clairaut form is $z = px + qy + f(p, q)$.\nComplete integral is obtained by setting $p = a$ and $q = b$:\n$$z = ax + by + a^2 + b^2$$\n\nStep 2 (Find Singular Solution by eliminating $a, b$):\nDifferentiating with respect to $a$ and $b$:\n$$\\frac{\\partial z}{\\partial a} = x + 2a = 0 \\implies a = -\\frac{x}{2}$$\n$$\\frac{\\partial z}{\\partial b} = y + 2b = 0 \\implies b = -\\frac{y}{2}$$\n\nStep 3 (Substitute back into Complete Integral):\n$$z = \\left(-\\frac{x}{2}\\right)x + \\left(-\\frac{y}{2}\\right)y + \\left(-\\frac{x}{2}\\right)^2 + \\left(-\\frac{y}{2}\\right)^2$$\n$$z = -\\frac{x^2}{2} - \\frac{y^2}{2} + \\frac{x^2}{4} + \\frac{y^2}{4} = -\\frac{x^2 + y^2}{4}$$\n$$x^2 + y^2 + 4z = 0$$\nBoxed Answer: Complete Integral: $z = ax + by + a^2 + b^2$; Singular Solution: $x^2 + y^2 + 4z = 0$."
      },
      {
            "id": "bamat-q5-9",
            "exam": "VIT Question Bank Sheet 5 Q20 \u2014 Lagrange's Equation with Multipliers",
            "marks": "10 Marks",
            "question": "Solve the Lagrange linear PDE: $(y^2 + z^2)p - xy \\, q + xz = 0$.",
            "solution": "Step 1 (Auxiliary Equations):\nRewrite as $(y^2 + z^2)p - xy \\, q = -xz$:\n$$\\frac{dx}{y^2 + z^2} = \\frac{dy}{-xy} = \\frac{dz}{-xz}$$\n\nStep 2 (First Integral by Grouping the last two ratios):\n$$\\frac{dy}{-xy} = \\frac{dz}{-xz} \\implies \\frac{dy}{y} = \\frac{dz}{z} \\implies \\ln|y| = \\ln|z| + \\ln c_1 \\implies \\frac{y}{z} = c_1$$\n\nStep 3 (Second Integral by Multipliers $(x, y, z)$):\nUsing multipliers $l = x, m = y, n = z$:\n$$\\frac{x \\, dx + y \\, dy + z \\, dz}{x(y^2 + z^2) + y(-xy) + z(-xz)} = \\frac{x \\, dx + y \\, dy + z \\, dz}{xy^2 + xz^2 - xy^2 - xz^2} = \\frac{x \\, dx + y \\, dy + z \\, dz}{0}$$\nSince the denominator is 0, the numerator must be zero:\n$$x \\, dx + y \\, dy + z \\, dz = 0 \\implies \\frac{x^2 + y^2 + z^2}{2} = \\text{const} \\implies x^2 + y^2 + z^2 = c_2$$\n\nStep 4 (General Solution):\n$$\\phi\\left( \\frac{y}{z}, x^2 + y^2 + z^2 \\right) = 0$$\nBoxed Answer: $\\phi\\left( \\frac{y}{z}, x^2 + y^2 + z^2 \\right) = 0$."
      },
      {
            "id": "bamat-q5-10",
            "exam": "VIT Question Bank Sheet 5 Q25 \u2014 1D Heat Conduction Boundary Value Problem",
            "marks": "10 Marks",
            "question": "A homogeneous metal rod of length $L$ has its ends kept at temperature $0^\\circ\\text{C}$ for $t > 0$. If the initial temperature distribution is $u(x, 0) = 3\\sin\\left(\\frac{\\pi x}{L}\\right) - 5\\sin\\left(\\frac{3\\pi x}{L}\\right)$, find the temperature $u(x, t)$ at any point $x$ and time $t$ using the method of separation of variables.",
            "solution": "Step 1 (Governing PDE & Boundary Conditions):\n$$\\frac{\\partial u}{\\partial t} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$$\nBoundary conditions: $u(0, t) = 0, \\quad u(L, t) = 0$ for all $t > 0$.\nInitial condition: $u(x, 0) = 3\\sin\\left(\\frac{\\pi x}{L}\\right) - 5\\sin\\left(\\frac{3\\pi x}{L}\\right)$.\n\nStep 2 (General Separated Fourier Series Solution):\nThe standard fundamental solution satisfying Dirichlet boundary conditions is:\n$$u(x, t) = \\sum_{n=1}^\\infty B_n \\sin\\left( \\frac{n\\pi x}{L} \\right) e^{-\\left(\\frac{n\\pi c}{L}\\right)^2 t}$$\n\nStep 3 (Match Initial Condition at $t = 0$):\n$$u(x, 0) = \\sum_{n=1}^\\infty B_n \\sin\\left( \\frac{n\\pi x}{L} \\right) = 3\\sin\\left(\\frac{\\pi x}{L}\\right) - 5\\sin\\left(\\frac{3\\pi x}{L}\\right)$$\nEquating coefficients directly by orthogonality:\n- For $n = 1$: $B_1 = 3$, exponential decay rate $\\lambda_1 = \\left(\\frac{\\pi c}{L}\\right)^2$.\n- For $n = 3$: $B_3 = -5$, exponential decay rate $\\lambda_3 = \\left(\\frac{3\\pi c}{L}\\right)^2 = \\frac{9\\pi^2 c^2}{L^2}$.\n- For all other $n$: $B_n = 0$.\n\nStep 4 (Final Exact Solution):\n$$u(x, t) = 3\\sin\\left(\\frac{\\pi x}{L}\\right) e^{-\\frac{\\pi^2 c^2 t}{L^2}} - 5\\sin\\left(\\frac{3\\pi x}{L}\\right) e^{-\\frac{9\\pi^2 c^2 t}{L^2}}$$\nBoxed Answer: $u(x, t) = 3\\sin\\left(\\frac{\\pi x}{L}\\right) e^{-\\frac{\\pi^2 c^2 t}{L^2}} - 5\\sin\\left(\\frac{3\\pi x}{L}\\right) e^{-\\frac{9\\pi^2 c^2 t}{L^2}}$."
      }
]
    }
  ]
};
